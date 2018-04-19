import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Event } from '../../models/Event-Interface'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  newEvent = {} as Event;
  newEventRef: Observable<any[]>;

  constructor(private database: AngularFireDatabase, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {

  }

  addEvent(newEvent: Event){
  	const fireList = this.database.list(newEvent.category);

  	fireList.push({

  		eventName: this.newEvent.eventName,
  		eventHost: this.newEvent.eventHost,
		date: this.newEvent.date,
		location: this.newEvent.location,
		coverURL: this.newEvent.coverURL,
		description: this.newEvent.description,
		category: this.newEvent.category,
		tags: this.newEvent.tags
  	})

  	this.eventPosted();



  }

  eventPosted(){


  	this.showAlert();
  	this.navCtrl.pop();

  }

  dismissModal(){

  	this.navCtrl.pop();
  }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Your event has been posted!',
      buttons: ['OK']
    });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

}
