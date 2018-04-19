import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from "../category/category";
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UploadPage } from "../upload/upload";

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

public categories:Array<any>=[] ;

public pushPage: any;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  	this.categories = [];   
  }

  ionViewDidLoad() {
  	this.categories.push(
    {
      image: 'assets/imgs/Unio-Arts.png',
      pageID: 'Arts'
    },
    {
      image: 'assets/imgs/Unio College.png',
      pageID: 'College'
    },
    {
      image: 'assets/imgs/Unio Education.png',
      pageID: 'Education'
    },
    {
      image: 'assets/imgs/Unio Music.png',
      pageID: 'Music'
    },
    {
      image: 'assets/imgs/Unio Nightlife.png',
      pageID: 'Nightlife'
    },
    {
      image: 'assets/imgs/Unio Sports.png',
      pageID: 'Sports'
    },
    {
      image: 'assets/imgs/Unio-Comedy.png',
      pageID: 'Comedy'
    },
    {
      image: 'assets/imgs/Unio-Volunteering.png',
      pageID: 'Volunteer'
    },
    {
      image: 'assets/imgs/Unio-Festival.png',
      pageID: 'Festival'
    },
    {
      image: 'assets/imgs/Unio-Family.png',
      pageID: 'Family'
    },
    {
      image: 'assets/imgs/Unio-Eats.png',
      pageID: 'Eats'
    },
    )
    console.log('ionViewDidLoad EventsPage');
  }

  buttonClick(pageID:string){

  	let data = {ID: pageID};

 	this.navCtrl.push(CategoryPage, data);

  }

  addEvent_2(){

    let modal = this.modalCtrl.create(UploadPage);
    modal.present();

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Your event has been posted!',
      buttons: ['OK']
    });
    alert.present();
  }


}

