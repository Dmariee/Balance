import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from "../category/category";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  buttonClick(id:string){


  	this.navCtrl.push(CategoryPage);




  }


}

