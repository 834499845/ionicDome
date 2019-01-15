import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-usermanagement',
  templateUrl: 'usermanagement.html',
})
export class UsermanagementPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

}
