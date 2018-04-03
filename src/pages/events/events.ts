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
  eventSource: any = [];

  saveEvent() {
  	var startTime = new Date(this.event.startTime);
  	var endTime = new Date(this.event.endTime);
  	this.eventSource.push({
  		title: this.event.title,
  		location: this.event.location,
  		startTime: startTime,
  		endTime: endTime
  	});
    console.log(this.eventSource);
  	this.navCtrl.pop();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.eventSource = navParams.get("eventSource");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
