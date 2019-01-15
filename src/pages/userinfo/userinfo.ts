import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-userinfo',
  templateUrl: 'userinfo.html',
})
export class UserinfoPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

}
