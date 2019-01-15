import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-forgetpwd',
  templateUrl: 'modal-forgetpwd.html',
})
export class ModalForgetpwdPage {
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNavPage');
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
