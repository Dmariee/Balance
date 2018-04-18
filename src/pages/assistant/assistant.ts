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

  // Change value of display section; causes divs to be hidden when display section is
  // not referenced.
  getNextDisplay(displaySection) {
    switch (displaySection) {
      case "planEvent":
        this.displaySection = displaySection;
        break;
      case "lookupEvent":
        this.displaySection = displaySection;
    }
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
    var availableTimes = [];
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
    // Holding values of allocated times of dates.
    var eventSplit;
    var eventStart;
    var eventEnd;
    // Loop through all busy times to find an unoccupied slot.
    for (var i = 0; i < this.busyTimes.length; i++) {
      eventSplit = this.busyTimes[i].split("split_here");
      eventStart = moment(eventSplit[0]);
      eventStart.subtract(eventStart.seconds(), "s");
      eventEnd = moment(eventSplit[1]);
      eventEnd.subtract(eventEnd.seconds(), "s");
      // Event starts before range head.
      if (eventStart.isBefore(lowerBound)) {
        // Event ends before range start.
        if (eventEnd.isBefore(lowerBound)) {
          console.log("Event starts before and ends before our bounds.",eventStart.format(), eventEnd.format());
          continue;
        }
        // Event ends after range head.
        else {
          // Event ends between given range.
          if (eventEnd.isBefore(upperBound)) {
            var availableHours = upperBound.diff(eventEnd, "h"); 
            var availableMinutes = upperBound.diff(eventEnd, "m");
            // Calculate free time from event end until upperbound.
            // If there is not enough time event cannot be planned in that slot.
            if (plannedHours > availableHours) {
              console.log("Not long enough duration for planning event.",eventEnd.format(), upperBound.format());
              break;
            }
            if (plannedHours == availableHours) {
              if (plannedMinutes > availableMinutes) {
                console.log("Not long enough duration for planning event.",eventEnd.format(), upperBound.format());
                break;
              }
              lowerBound = eventEnd;
              console.log("Lower bound changed", lowerBound);
              continue;
            }
            lowerBound = eventEnd;
            console.log("Lower bound changed", lowerBound);
            continue;
          }
          // There is an event during this time.
          else {
            console.log("Event is allocated for this time.");
            break;
          }
        }
      }
    }
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.plannedEvents = navParams.get("plannedEvents");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssistantPage');
  }

}