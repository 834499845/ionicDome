import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-equipment-edit',
  templateUrl: 'equipment-edit.html',
})
export class EquipmentEditPage {

  constructor(public platform: Platform,
    public navCtrl: NavController) {
  }


}
