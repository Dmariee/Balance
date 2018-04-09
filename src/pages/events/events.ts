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
  availableTimes = {};

  goBack() {
    this.navParams.get("parentPage").updateCalendar(this.eventHolder);
    this.navCtrl.pop();
  }

  saveEvent() {
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
    if (!(inputDate in this.availableTimes)) {
      inputHolder.push(inputFiller);
      this.availableTimes[inputDate] = inputHolder;
    }
    else {
      inputHolder = this.availableTimes[inputDate];
      inputHolder.push(inputFiller);
      inputHolder.sort();
      this.availableTimes[inputDate] = inputHolder;
    }

    console.log(this.availableTimes[inputDate]);
    this.navCtrl.pop();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.eventHolder = navParams.get("eventHolder");
    this.availableTimes = navParams.get("availableTimes");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
