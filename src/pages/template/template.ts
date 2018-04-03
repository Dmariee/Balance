import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-template',
  templateUrl: 'template.html',
})
export class TemplatePage {
  event;
  title;
  description;
  location;
  startTime;
  endTime;

  populateEventFields() {
  	this.title = this.event.title;
  	this.description = this.event.description;
  	this.location = this.event.location;
  	this.startTime = this.event.startTime;
  	this.endTime = this.event.endTime;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.event = navParams.get("event");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplatePage');
  	this.populateEventFields();
  }

}
