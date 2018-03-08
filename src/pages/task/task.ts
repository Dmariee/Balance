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

  date: string;
  type: 'string';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onChange($event) {
  	console.log($event);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

}
