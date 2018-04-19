import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the AssistantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assistant',
  templateUrl: 'assistant.html',
})
export class AssistantPage {
  // Which div section to display on screen.
  displaySection = 'base';
  // Details about when you would like to try to plan holding an event.
  planning = {
    lowerBound: moment().format(),
    upperBound: moment().format(),
    // Set to 00:00 *DO NOT CHANGE*
    duration: "2018-01-01T00:00:00-04:00",
  };
  // All events on calendar between set range of dates.
  plannedEvents = [];
  // Times you are available; make suggestions based on this set.
  availableTimes = [];
  // Times you have events already allocated to; only override if planned event has
  // higher priorty and conflicts in scheduling.
  busyTimes = [];
  // Finds events based on tag input.
  eventTagSearch = "";
  // Top suggested choices.
  suggestions = [];
  suggestionComment = "I suggest the following slot(s):";

  // Change value of display section; causes divs to be hidden when display section is
  // not referenced.
  getNextDisplay(displaySection) {
    switch (displaySection) {
      case "planEvent":
        this.displaySection = displaySection;
        break;
      case "giveSuggestion":
        this.giveSuggestion();
        this.displaySection = displaySection;
        break;
      case "lookupEvent":
        this.displaySection = displaySection;
        break;
    }
  }

  // Give suggestions based on available times.
  giveSuggestion() {
    this.findAvailableTimes();
    var plannedHours = moment(this.planning.duration).hours() + 1;
    if (plannedHours == 24) {
      plannedHours = 0;
    }
    var plannedMinutes = moment(this.planning.duration).minutes();
    switch (this.availableTimes.length) {
      // No available times.
      case 0:
        this.suggestionComment = "There are no available times in given slot.";
        this.suggestions.push("Return home");
        return;
      default:
        for (var i = 0; i < this.availableTimes.length; i++) {
          var eventStart = moment((this.availableTimes[i].split("split_here"))[0]);
          var eventEnd = moment((this.availableTimes[i].split("split_here"))[0]);
          eventEnd = eventEnd.add({hours: plannedHours, minutes: plannedMinutes});
          this.suggestions.push(eventStart.format("MMMM DD hh:mm a") + " - " + eventEnd.format("MMMM DD hh:mm a"));
        }
    }
  }

  addSuggestion(event) {
    console.log(event);
  }

  showEventTag() {
    console.log(this.eventTagSearch);
  }

  // Finds busy times within the range of planning variable.
  findBusyTimes() {
    // Head of range for avaible start time.
    var lowerBound_TextType = moment(this.planning.lowerBound).format("MM/DD/YYYY");
    var lowerBound_DateType = moment(lowerBound_TextType, "MM/DD/YYYY");
    // Tail of range for avaible start time.
    var upperBound_TextType = moment(this.planning.upperBound).format("MM/DD/YYYY");
    var upperBound_DateType = moment(upperBound_TextType, "MM/DD/YYYY");
    // Calculates difference in days between head and tail of provided start times.
    var daysBetween = upperBound_DateType.diff(lowerBound_DateType, 'd');
    // Holds incremented day titles.
    var daysBetweenHolder = lowerBound_DateType;
    var busyTimes = [];
    for (daysBetween; daysBetween >= 0; daysBetween--) {
      if (this.plannedEvents[daysBetweenHolder.format("MM/DD/YYYY")] != undefined) {
        busyTimes = busyTimes.concat(this.plannedEvents[daysBetweenHolder.format("MM/DD/YYYY")]);
      }
      daysBetweenHolder.add(1, 'd');
    }
    busyTimes.sort();
    this.busyTimes = busyTimes;
  }

  //Finds avaible times within the range of planning variable.
  findAvailableTimes() {
    this.findBusyTimes();
    // Head of range for avaible start time.
    var lowerBound = moment(this.planning.lowerBound);
    lowerBound.subtract(lowerBound.seconds(), "s");
    // Tail of range for avaible start time.
    var upperBound = moment(this.planning.upperBound);
    upperBound.subtract(upperBound.seconds(), "s");
    // Pulling the planned duration of the event from the given user input.
    var plannedHours = moment(this.planning.duration).hours() + 1;
    // Handle weird return value when input for hours is 00.
    if (plannedHours == 24) {
      plannedHours = 0;
    }
    var plannedMinutes = moment(this.planning.duration).minutes();
    // If there are no busy times you are free to plan within given range.
    if (this.busyTimes.length == 0) {
      this.availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
      return;
    }
    // Find available times driver.
    var availableTimes = this.recurseDays(this.busyTimes, lowerBound, upperBound, plannedHours, plannedMinutes, 0);
    this.availableTimes = availableTimes;
  }

  recurseDays(busyTimes, lowerBound, upperBound, plannedHours, plannedMinutes, index) {
    var availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
    // Holding values of allocated times for dates.
    var eventSplit;
    var eventStart;
    var eventEnd;
    var availableHours;
    var availableMinutes;
    // Loop through all busy times to find an unoccupied slot.
    for (index; index < busyTimes.length; index++) {
      eventSplit = this.busyTimes[index].split("split_here");
      eventStart = moment(eventSplit[0]);
      eventStart.subtract(eventStart.seconds(), "s");
      eventEnd = moment(eventSplit[1]);
      eventEnd.subtract(eventEnd.seconds(), "s");
      // Event starts before range head.
      if (eventStart.isBefore(lowerBound)) {
        // Event ends before range start.
        if (eventEnd.isBefore(lowerBound)) {
          continue;
        }
        // Event ends between given range.
        if (eventEnd.isBefore(upperBound)) {
          availableHours = upperBound.diff(eventEnd, "h");
          availableMinutes = upperBound.diff(eventEnd, "m");
          // Calculate free time from event end until upper bound.
          // If there is not enough time event cannot be planned in that slot.
          if (plannedHours > availableHours) {
            return new Array;
          }
          if (plannedHours == availableHours) {
            if (plannedMinutes > availableMinutes) {
              return new Array;
            }
            lowerBound = eventEnd;
            availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
            continue;
          }
          lowerBound = eventEnd;
          availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
          continue;
        }
        // There is an event during this time.
        return new Array;
      }
      else {
        // Event happens after given range.
        if (eventStart.isAfter(upperBound)) {
          return  new Array;
        }
        // Event starts between the range and ends after.
        if (eventEnd.isAfter(upperBound)) {
            availableHours = eventStart.diff(lowerBound, "h");
            availableMinutes = eventStart.diff(lowerBound, "m");
            if (plannedHours > availableHours) {
              return new Array;
            }
            if (plannedHours == availableHours) {
              if (plannedMinutes > availableMinutes) {
                return new Array;
              }
              upperBound = eventStart;
              availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
              continue;
            }
            // plannedhours < availableHours.
            upperBound = eventStart;
            availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
            continue;
        }
        // Event is in between given range.
        var split_1 = [];
        var split_2 = [];
        // Sanity checks for split ranges.
        if ((plannedHours < eventStart.diff(lowerBound, "h")) ||
          ((plannedHours == eventStart.diff(lowerBound, "h")) && (plannedMinutes <= eventStart.diff(lowerBound, "m")))) {
          split_1 = this.recurseDays(busyTimes, lowerBound, eventStart, plannedHours, plannedMinutes, index + 1);
        }
        if ((plannedHours < upperBound.diff(eventEnd, "h")) ||
          ((plannedHours == upperBound.diff(eventEnd, "h")) && (plannedMinutes <= upperBound.diff(eventEnd, "m")))) {
          split_2 = this.recurseDays(busyTimes, eventEnd, upperBound, plannedHours, plannedMinutes, index + 1);
        }
        availableTimes = split_1.concat(split_2);
        availableTimes.sort();
      }
    }
    return availableTimes;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.plannedEvents = navParams.get("plannedEvents");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssistantPage');
  }

}