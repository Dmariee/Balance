import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgCalendarModule } from "ionic2-calendar";
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TaskPage } from '../pages/task/task';
import { FriendPage } from '../pages/friend/friend';
import { ExplorePage } from '../pages/explore/explore';
import { EventsPage } from '../pages/events/events';
import { TemplatePage } from '../pages/template/template';
import { AssistantPage } from '../pages/assistant/assistant';
import { CategoryPage } from '../pages/category/category';
import { UploadPage } from '../pages/upload/upload';
import { ScheduleEventPage } from '../pages/schedule-event/schedule-event';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TaskPage,
    FriendPage,
    ExplorePage,
    EventsPage,
    ScheduleEventPage,
    TemplatePage,
    AssistantPage,
    CategoryPage,
    UploadPage
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TaskPage,
    FriendPage,
    ExplorePage,
    EventsPage,
    ScheduleEventPage,
    TemplatePage,
    AssistantPage,
    CategoryPage,
    UploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
