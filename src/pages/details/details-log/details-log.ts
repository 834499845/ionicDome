import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details-log',
  templateUrl: 'details-log.html',
})
export class DetailsLogPage {

  constructor(public platform: Platform,
    public navCtrl: NavController) {
  }


}
