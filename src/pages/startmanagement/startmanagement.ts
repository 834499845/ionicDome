import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-startmanagement',
  templateUrl: 'startmanagement.html',
})
export class StartmanagementPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

}
