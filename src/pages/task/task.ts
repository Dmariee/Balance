import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { TemplatePage } from '../template/template';
import { AssistantPage } from '../assistant/assistant';

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
    eventSource: any = [];
    eventHolder: any = [];
    viewTitle;
    isToday: boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date(),
    };

    addEvent() {
        this.eventSource = [];
        this.navCtrl.push(EventsPage, {
            "eventHolder": this.eventHolder,
            "parentPage": this,
        });
    }

    callAssistant() {
        this.navCtrl.push(AssistantPage);
    }

    onCurrentDateChanged(event: Date) {
        this.viewTitle = this.months[event.getMonth()] + event.getFullYear();
    };

    onEventSelected(event) {
        this.navCtrl.push(TemplatePage, {
            "event": event,
        });
    }

    onTimeSelected(ev) {
        console.log(ev);
    }

    today() {
        this.calendar.currentDate = new Date();
    }

    updateCalendar(data) {
        this.eventSource = data;
    }
 
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TaskPage');
    }
}
