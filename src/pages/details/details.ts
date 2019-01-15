import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  tab1Root = 'DetailsRealPage';
  tab2Root = 'DetailsAnalysisPage';
  tab3Root = 'DetailsLogPage';
  tab4Root = 'DetailsSettingPage';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovalPage');
  }

}
