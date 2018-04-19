import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleEventPage } from './schedule-event';

@NgModule({
  declarations: [
    ScheduleEventPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleEventPage),
  ],
})
export class ScheduleEventPageModule {}
