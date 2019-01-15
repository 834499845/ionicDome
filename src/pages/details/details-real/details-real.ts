import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details-real',
  templateUrl: 'details-real.html',
})
export class DetailsRealPage {

  constructor(public platform: Platform,
    public navCtrl: NavController) {
  }


}
