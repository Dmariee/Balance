import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

public catTitle: String;
public eventRef: Observable<any[]>

  constructor(public actionSheetCtrl: ActionSheetController, private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  	this.eventRef = this.database.list(this.navParams.get('ID')).valueChanges();
  }

  ionViewDidLoad() {

  	this.catTitle = this.navParams.get('ID')
    
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
   
      buttons: [
        {
          text: 'Save',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Share',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Report',
          role: 'destructive',
          handler: () => {
            console.log('Report clicked');
          }

        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
