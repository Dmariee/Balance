import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html',
})
export class FriendPage {
	
	items = [
	    'Pokémon Yellow',
	    'Super Metroid',
	    'Mega Man X',
	    'The Legend of Zelda',
	    'Pac-Man',
	    'Super Mario World',
	    'Street Fighter II',
	    'Half Life',
	    'Final Fantasy VII',
	    'Star Fox',
	    'Tetris',
	    'Donkey Kong III',
	    'GoldenEye 007',
	    'Doom',
	    'Fallout',
	    'GTA',
	    'Halo'
	  ];

	  itemSelected(item: string) {
	    console.log("Selected Item", item);
	  }
	
	 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendPage');
  }

}
