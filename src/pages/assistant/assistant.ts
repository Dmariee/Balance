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
  // Is personal assistant adding an event.
  addingEvent = false;
  event = {
    title: "",
    description: "",
    location: "",
    priority: "",
  };
  selectedSuggestion = "";
  eventHolder = [];
  plannedEvents = {};
  plannedHours;
  plannedMinutes;
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
        var plannedHours = moment(this.planning.duration).hours() + 1;
        if (plannedHours == 24) {
          plannedHours = 0;
        }
        var plannedMinutes = moment(this.planning.duration).minutes();
        this.plannedHours = plannedHours;
        this.plannedMinutes = plannedMinutes;
        this.giveSuggestion();
        this.displaySection = displaySection;
        break;
      case "lookupEvent":
        this.displaySection = displaySection;
        break;
    }
  }

  goBack() {
    this.navParams.get("parentPage").updateCalendar(this.eventHolder);
    this.navCtrl.pop();
  }

  // Give suggestions based on available times.
  giveSuggestion() {
    this.findAvailableTimes();
    switch (this.availableTimes.length) {
      // No available times.
      case 0:
        this.suggestionComment = "There are no available times in given slot.";
        this.suggestions.push("Return to home.");
        break;
      default:
        for (var i = 0; i < this.availableTimes.length; i++) {
          var eventStart = moment((this.availableTimes[i].split("split_here"))[0]);
          var eventEnd = moment((this.availableTimes[i].split("split_here"))[0]);
          eventEnd = eventEnd.add({hours: this.plannedHours, minutes: this.plannedMinutes});
          this.suggestions.push(eventStart.format("MMMM DD YY hh:mm a") + " - " + eventEnd.format("MMMM DD YY hh:mm a"));
        }
    }
  }

  pickSuggestion(index) {
    if (this.availableTimes.length == 0) {
      this.goBack();
    }
    else {
      this.addingEvent = true;
      this.selectedSuggestion = this.suggestions[index];
    }
  }

  saveSuggestion() {
    var startTime = new Date(this.selectedSuggestion.split("-")[0]);
    var endTime = new Date(this.selectedSuggestion.split("-")[1]);
    var inputDate = moment(startTime).format("MM/DD/YYYY");
    var inputFiller = moment(startTime).format() + "split_here" + moment(endTime).format();
    var inputHolder = new Array();
    this.eventHolder.push({
      title: this.event.title,
      description: this.event.description,
      location: this.event.location,
      startTime: startTime,
      endTime: endTime,
      priority: this.event.priority,
    });
    this.navParams.get("parentPage").updateCalendar(this.eventHolder);
    if (!(inputDate in this.plannedEvents)) {
      inputHolder.push(inputFiller);
      this.plannedEvents[inputDate] = inputHolder;
    }
    else {
      inputHolder = this.plannedEvents[inputDate];
      inputHolder.push(inputFiller);
      inputHolder.sort();
      this.plannedEvents[inputDate] = inputHolder;
    }
    this.navCtrl.pop();
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
    // If there are no busy times you are free to plan within given range.
    if (this.busyTimes.length == 0) {
      this.availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
      return;
    }
    // Data vaildation checking.
    if ((this.plannedHours == 0) && (this.plannedMinutes == 0)) {
      alert("Duration cannot be set to 0hrs 0mins.");
      this.goBack();
    }
    else if (upperBound.isBefore(lowerBound)) {
      alert("Upper bound cannot start before lower bound.");
      this.goBack();
    }
    else if (upperBound.diff(lowerBound, "m") == 0) {
      alert("Upper bound cannot equal lower bound.");
      this.goBack();
    }
    else if ((moment(lowerBound).add({hours: this.plannedHours, minutes: this.plannedMinutes})).isAfter(upperBound)) {
      alert("Duration between values is to large.");
      this.goBack();
    }
    else {
      // Find available times driver.
      var availableTimes = this.recurseDays(this.busyTimes, lowerBound, upperBound, this.plannedHours, this.plannedMinutes, 0);
      this.availableTimes = availableTimes;
    }
  }

  recurseDays(busyTimes, lowerBound, upperBound, plannedHours, plannedMinutes, index) {
    var availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
    // Holding values of allocated times for dates.
    var eventStart;
    var eventEnd;
    // Loop through all busy times to find an unoccupied slot.
    for (index; index < busyTimes.length; index++) {
      eventStart = moment(this.busyTimes[index].split("split_here")[0]);
      eventStart.subtract(eventStart.seconds(), "s");
      eventEnd = moment(this.busyTimes[index].split("split_here")[1]);
      eventEnd.subtract(eventEnd.seconds(), "s");
      // Event starts before range head.
      if (eventStart.isBefore(lowerBound)) {
        // Event ends before range start.
        if (eventEnd.isBefore(lowerBound)) {
          console.log("case 1");
          continue;
        }
        // Event ends between given range.
        if (eventEnd.isBefore(upperBound)) {
          if ((moment(eventEnd).add({hours: this.plannedHours, minutes: this.plannedMinutes})).isAfter(upperBound)) {
            console.log("case 2a");
            return new Array;
          }
          lowerBound = eventEnd;
          availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
          console.log("case 2b");
          continue;
        }
        // There is an event during selected time.
        console.log("case 3");
        return new Array;
      }
      else {
        // Event happens after given range.
        if (eventStart.isAfter(upperBound)) {
          console.log("case 4");
          return availableTimes;
        }
        // Event starts between the range and ends after.
        if (eventEnd.isAfter(upperBound)) {
          if ((moment(lowerBound).add({hours: this.plannedHours, minutes: this.plannedMinutes})).isAfter(eventStart)) {
            console.log("case 5a");
            return new Array;
          }
          upperBound = eventStart;
          availableTimes = [lowerBound.format() + "split_here" + upperBound.format()];
          console.log("case 5b");
          continue;
        }
        console.log("case 6");
        // Event is in between given range.
        var branch_lower = [];
        var branch_upper = [];
        // Sanity checks for branch ranges.
        if (!((moment(lowerBound).add({hours: this.plannedHours, minutes: this.plannedMinutes})).isAfter(eventStart))) {
          branch_lower = this.recurseDays(busyTimes, lowerBound, eventStart, this.plannedHours, this.plannedMinutes, index + 1);
        }
        if (!((moment(eventEnd).add({hours: this.plannedHours, minutes: this.plannedMinutes})).isAfter(upperBound))) {
          branch_upper = this.recurseDays(busyTimes, eventEnd, upperBound, this.plannedHours, this.plannedMinutes, index + 1);
        }
        availableTimes = branch_lower.concat(branch_upper);
        availableTimes.sort();
      }
    }
    console.log("case 7");
    return availableTimes;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eventHolder = navParams.get("eventHolder");
    this.plannedEvents = navParams.get("plannedEvents");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssistantPage');
  }

}
