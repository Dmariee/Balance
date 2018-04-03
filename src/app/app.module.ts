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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TaskPage,
    FriendPage,
    ExplorePage,
    EventsPage,
    TemplatePage,
    AssistantPage,
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TaskPage,
    FriendPage,
    ExplorePage,
    EventsPage,
    TemplatePage,
    AssistantPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
