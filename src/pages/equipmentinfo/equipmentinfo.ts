import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-equipmentinfo',
  templateUrl: 'equipmentinfo.html',
})
export class EquipmentinfoPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

}
