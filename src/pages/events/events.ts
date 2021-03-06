import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  event = { 
    title: "",
    description: "",
    location: "",
    startTime: moment().format(),
    endTime: moment().format(),
    priority: "", 
  };
  eventHolder: any = [];
  plannedEvents = {};

  goBack() {
    this.navParams.get("parentPage").updateCalendar(this.eventHolder);
    this.navCtrl.pop();
  }

  saveEvent() {
    // Data vaildation checks.
    if ((moment(this.event.endTime)).isBefore((moment(this.event.startTime)))) {
      alert("End time cannot be before start time.");
      this.goBack();
    }
    else if ((moment(this.event.endTime)).diff((moment(this.event.startTime)), "m") == 0) {
      alert("End time cannot equal start time.");
      this.goBack();
    }
    else {
      var inputDate = moment(this.event.startTime).format("MM/DD/YYYY");
      var inputFiller = this.event.startTime + "split_here" + this.event.endTime;
      var inputHolder = new Array();
      this.eventHolder.push({
        title: this.event.title,
        description: this.event.description,
        location: this.event.location,
        startTime: new Date(this.event.startTime),
        endTime: new Date(this.event.endTime),
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
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.eventHolder = navParams.get("eventHolder");
    this.plannedEvents = navParams.get("plannedEvents");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
