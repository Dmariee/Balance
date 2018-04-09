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
  planning = {
    rangeStart: moment().format(),
    rangeEnd: moment().format(),
    plannedDuration: moment().format(),
  };
  availableTimes;

  getNextDisplay(displaySection) {
    switch (displaySection) {
      case "planEvent":
        this.displaySection = displaySection;
        break;
      case "lookupEvent":
        this.displaySection = displaySection;
    }
  }

  show() {
    var inputRangeStart_TextType = moment(this.planning.rangeStart).format("MM/DD/YYYY");
    var inputRangeStart_DateType = moment(inputRangeStart_TextType, "MM/DD/YYYY");
    var inputRangeEnd_TextType = moment(this.planning.rangeEnd).format("MM/DD/YYYY");
    var inputRangeEnd_DateType = moment(inputRangeEnd_TextType, "MM/DD/YYYY");
    var daysBetween = inputRangeEnd_DateType.diff(inputRangeStart_DateType, 'd');
    var daysBetweenHolder = inputRangeStart_DateType;
    for (daysBetween; daysBetween >= 0; daysBetween--) {
      console.log(daysBetweenHolder.format("MM/DD/YYYY")); // value to look up in dictionary
      daysBetweenHolder = daysBetweenHolder.add(1, 'd');
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.availableTimes = navParams.get("availableTimes");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssistantPage');
  }

}
