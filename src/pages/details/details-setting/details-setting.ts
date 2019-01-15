import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details-setting',
  templateUrl: 'details-setting.html',
})
export class DetailsSettingPage {

  constructor(public platform: Platform,
    public navCtrl: NavController) {
  }


}
