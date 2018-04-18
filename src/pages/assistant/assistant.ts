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
    rangeStart: moment().format(),
    rangeEnd: moment().format(),
    // Set to 00:00 *DO NOT CHANGE*
    plannedDuration: "2018-01-01T00:00:00-04:00",
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
    var inputRangeStart_TextType = moment(this.planning.rangeStart).format("MM/DD/YYYY");
    var inputRangeStart_DateType = moment(inputRangeStart_TextType, "MM/DD/YYYY");
    // Tail of range for avaible start time.
    var inputRangeEnd_TextType = moment(this.planning.rangeEnd).format("MM/DD/YYYY");
    var inputRangeEnd_DateType = moment(inputRangeEnd_TextType, "MM/DD/YYYY");
    // Calculates difference in days between head and tail of provided start times.
    var daysBetween = inputRangeEnd_DateType.diff(inputRangeStart_DateType, 'd');
    // Holds incremented day titles.
    var daysBetweenHolder = inputRangeStart_DateType;
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
    var inputRangeStart = moment(this.planning.rangeStart);
    inputRangeStart.subtract(inputRangeStart.seconds(), "s");
    // Tail of range for avaible start time.
    var inputRangeEnd = moment(this.planning.rangeEnd);
    inputRangeEnd.subtract(inputRangeEnd.seconds(), "s");
    // Pulling the planned duration of the event from the given user input.
    var plannedHours = moment(this.planning.plannedDuration).hours() + 1;
    // Handle weird return value when input for hours is 00.
    if (plannedHours == 24) {
      plannedHours = 0;
    }
    var plannedMinutes = moment(this.planning.plannedDuration).minutes();
    // Holding values of allocated times of dates.
    var eventSplit;
    var eventStart;
    var eventEnd;
    var timeBetweenEvents;
    // Loop through all busy times to find an unoccupied slot.
    for (var i = 0; i < this.busyTimes.length; i++) {
      eventSplit = this.busyTimes[i].split("split_here");
      eventStart = moment(eventSplit[0]);
      eventEnd = moment(eventSplit[1]);
      eventStart = eventStart.subtract(eventStart.seconds(), "s");
      eventEnd = eventEnd.subtract(eventEnd.seconds(), "s");
      // Event starts before range head.
      if (eventStart.isBefore(inputRangeStart)) {
        // Event ends before range start.
        if (eventEnd.isBefore(inputRangeStart)) {
          console.log("Event starts before and ends before.");
          continue;
        }
        // Event ends after range head.
        else {
          // Event ends between given range.
          if (eventEnd.isBefore(inputRangeEnd)) {
            // Calculate free time from event end until range tail.
            continue;
          }
          // There is event during this time.
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