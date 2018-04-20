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
    plannedEvents = {};
    eventSource: any = [];
    eventHolder: any = [];
    viewTitle;
    isToday: boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date(),
    };

    loadEvents() {
        this.eventSource = this.createRandomEvents();
    }

    createRandomEvents() {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            var startMinute = Math.floor(Math.random() * 24 * 60);
            var endMinute = Math.floor(Math.random() * 180) + startMinute;
            startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
            endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
            events.push({
                title: 'Placeholder for demo',
                startTime: startTime,
                endTime: endTime,
            });
        }
        return events;
    }

    addEvent() {
        this.eventSource = [];
        this.navCtrl.push(EventsPage, {
            "eventHolder": this.eventHolder,
            "plannedEvents": this.plannedEvents,
            "parentPage": this,
        });
    }

    callAssistant() {
        this.navCtrl.push(AssistantPage, {
            "eventHolder": this.eventHolder,
            "plannedEvents": this.plannedEvents,
            "parentPage": this,
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
        this.loadEvents();
    }
}   