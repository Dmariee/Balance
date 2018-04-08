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
  displaySection = 'base';
  plannedStart = moment().format();
  availableTimes;

  getNextDisplay(displaySection) {
    this.displaySection = displaySection;
  }

  show() {
    var startTime = new Date(this.plannedStart);
    var inputDate = (startTime.getMonth() + 1) + "/" + startTime.getDate() + "/" + startTime.getFullYear();
    console.log(this.availableTimes[inputDate]);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.availableTimes = navParams.get("availableTimes");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssistantPage');
  }

}
