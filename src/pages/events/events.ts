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
  event = { 
    title: "",
    description: "",
    location: "",
    startTime: "",
    endTime: "",
    priority: "", 
  };
  eventHolder: any = [];

  goBack() {
    this.navParams.get("parentPage").updateCalendar(this.eventHolder);
    this.navCtrl.pop();
  }

  saveEvent() {
  	var startTime = new Date(this.event.startTime);
  	var endTime = new Date(this.event.endTime);
  	this.eventHolder.push({
  		title: this.event.title,
      description: this.event.description,
  		location: this.event.location,
      startTime: startTime,
      endTime: endTime,
      priority: this.event.priority,
  	});
    this.navParams.get("parentPage").updateCalendar(this.eventHolder);
    this.navCtrl.pop();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.eventHolder = navParams.get("eventHolder");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
