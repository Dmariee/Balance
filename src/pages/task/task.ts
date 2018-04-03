import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsPage } from '../events/events';

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
    eventSource;
    eventHolder: any = [];
    viewTitle;
    isToday: boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date()
    };

    addEvent() {
        this.eventSource = [];
        this.navCtrl.push(EventsPage, {
            "eventHolder": this.eventHolder,
            "parentPage": this
        });
    }

    updateCalendar(data) {
        this.eventSource = data;
        console.log(this.eventSource);
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
