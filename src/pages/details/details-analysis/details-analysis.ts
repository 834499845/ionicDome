import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details-analysis',
  templateUrl: 'details-analysis.html',
})
export class DetailsAnalysisPage {

  constructor(public platform: Platform,
    public navCtrl: NavController) {
  }


}
