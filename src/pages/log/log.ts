import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

}
