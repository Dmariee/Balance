import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html',
})
export class FriendPage {
  
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aiv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

	itemSelected(item: string) {
	  console.log("Selected Item", item);
    alert("You do not have permission to view item " + item + "'s schedule.");
	}
	
	getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendPage');
  }

}
