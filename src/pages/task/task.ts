import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
    months = ["JANUARY ","FEBRUARY ","MARCH ","APRIL ","MAY ","JUNE ","JULY ","AUGUST ","SEPTEMBER ","OCTOBER ","NOVEMBER ","DECEMBER "];
    eventsHolder: any = [];
    eventSource: any = [];
    viewTitle;
    isToday: boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date()
    };

    addEvent() {
        var date = new Date();
        var startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2, 0, date.getMinutes() + 12);
        var endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2, 0, date.getMinutes() + 19);
        this.eventsHolder.push(
        {
            title: "Tester",
            startTime:  startTime,
            endTime:  endTime,
            allDay: false
        });
        this.eventSource = this.eventsHolder;
    }

    today() {
        this.calendar.currentDate = new Date();
    }

    onCurrentDateChanged = (ev: Date) => {
        this.viewTitle = this.months[ev.getMonth()] + ev.getFullYear();
    };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

}
