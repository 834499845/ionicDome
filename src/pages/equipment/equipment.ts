import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-equipment',
  templateUrl: 'equipment.html',
})
export class EquipmentPage {

  tab1Root = 'EquipmentEditPage';
  tab2Root = 'EquipmentAddPage';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovalPage');
  }

}
