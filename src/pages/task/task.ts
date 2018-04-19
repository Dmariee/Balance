import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScheduleEventPage } from '../schedule-event/schedule-event';
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
    plannedEvents = {};
    eventSource: any = [];
    eventHolder: any = [];
    viewTitle;
    isToday: boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date(),
    };

    scheduleEvent() {
        this.eventSource = [];
        this.navCtrl.push(ScheduleEventPage, {
            "eventHolder": this.eventHolder,
            "plannedEvents": this.plannedEvents,
            "parentPage": this,
        });
    }

    callAssistant() {
        this.navCtrl.push(AssistantPage, {
            "plannedEvents": this.plannedEvents,
        });
    }

    onCurrentDateChanged(event: Date) {
        this.viewTitle = this.months[event.getMonth()] + event.getFullYear();
    };

    onEventSelected(event) {
        this.navCtrl.push(TemplatePage, {
            "event": event,
        });
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