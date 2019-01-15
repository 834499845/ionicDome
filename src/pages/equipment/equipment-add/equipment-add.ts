import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-equipment-add',
  templateUrl: 'equipment-add.html',
})
export class EquipmentAddPage {

  constructor(public platform: Platform,
    public navCtrl: NavController) {
  }


}
