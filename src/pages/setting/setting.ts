import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }
  // 用户信息
  userInfoClick() {
    let data = {
    };
    this.navCtrl.push('UserinfoPage', data);
  }
  // 设备管理
  equipmentManagement() {
    let data = {
    };
    this.navCtrl.push('EquipmentPage', data);
  }
  // 用户管理
  userManagement() {
    let data = {
    };
    this.navCtrl.push('UsermanagementPage', data);
  }
  // 启动设置
  startManagement() {
    let data = {
    };
    this.navCtrl.push('StartmanagementPage', data);
  }

  // 退出登录
  exitManagement() {
    let data = {
    };
    this.navCtrl.push('DetailsPage', data);
  }
  // 切换用户
  replaceManagement() {
    let data = {
    };
    this.navCtrl.push('DetailsPage', data);
  }
  // 联系我们
  contactus() {
    let data = {
    };
    this.navCtrl.push('DetailsPage', data);
  }
  // 关于我们
  aboutus() {
    let data = {
    };
    this.navCtrl.push('AboutusPage', data);
  }

}
