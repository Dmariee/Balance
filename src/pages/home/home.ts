import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TaskPage } from "../task/task";
import { FriendPage } from "../friend/friend";
import { ExplorePage } from "../explore/explore";
import { EventsPage } from "../events/events";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = TaskPage;
  tab2Root = FriendPage;
  tab3Root = EventsPage;
  tab4Root = ExplorePage;
  
  constructor(public navCtrl: NavController) {

  }

}
