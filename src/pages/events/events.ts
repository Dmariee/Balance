import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  event = { title: "", location: "", startTime: "", endTime: "" };
  eventHolder: any = [];

  saveEvent() {
  	var startTime = new Date(this.event.startTime); 
  	var startTimeFormatted = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), startTime.getHours(), startTime.getMinutes());
  	var endTime = new Date(this.event.endTime);
  	var endTimeFormatted = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), startTime.getHours(), endTime.getMinutes());
  	this.eventHolder.push({
  		title: this.event.title,
  		location: this.event.location,
  		startTime: startTimeFormatted,
  		endTime: endTimeFormatted
  	});
  	this.navCtrl.pop();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.eventHolder = navParams.get("eventHolder");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
