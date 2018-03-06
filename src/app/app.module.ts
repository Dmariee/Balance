import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CalendarModule } from "ion2-calendar";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TaskPage } from '../pages/task/task';
import { FriendPage } from '../pages/friend/friend';
import { ExplorePage } from '../pages/explore/explore';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TaskPage,
    FriendPage,
    ExplorePage
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TaskPage,
    FriendPage,
    ExplorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
