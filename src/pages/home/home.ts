import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { HttpServeProvider } from '../../providers/http-serve/http-serve';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;
  isSelectItem: any;
  list: any;
  constructor(public navCtrl: NavController, public http: HttpServeProvider,
    public toastCtrl: ToastController, ) {
    this.items = [{ title: '东区', num: '41' }, { title: '北区', num: '141' }, { title: '南区', num: '1' }, { title: '西区', num: '41' }, { title: '西区', num: '41' }, { title: '西区', num: '41' }, { title: '西区', num: '41' }, { title: '西区', num: '41' }, { title: '西区', num: '41' }, { title: '西区', num: '41' }, { title: '西区', num: '41' }];

    this.isSelectItem = 0

    this.list = [{
      title: '东区', num: '2', iswarning: 3, iserror: 1, isShow: true,
      arr: [{ name: '冷水机#1', name1: '功率', iswarning: 3, iserror: 1, value1: '91.8', valueUnit1: 'kW', name2: '冷', value2: '91.8', valueUnit2: '°C' }, { name: '冷水机#1', name1: '功率', value1: '91.8', valueUnit1: 'kW', name2: '冷冻', value2: '91.8', valueUnit2: '°C' }]
    }, {
      title: '北区', num: '141', isShow: true,
      arr: [{ name: '冷水机#1', name1: '功率', iswarning: 3, value1: '91.8', valueUnit1: 'kW', name2: '冷冻回水温度', value2: '91.8', valueUnit2: '°C' }, { name: '冷水机#1', name1: '功率', value1: '91.8', valueUnit1: 'kW', name2: '冷冻回水温度', value2: '91.8', valueUnit2: '°C' }]
    }];

  }
  ionViewDidLoad() {

  }
  itemClick(item, i) {
    this.isSelectItem = i;

  }
  listClick(item, i) {
    this.list[i].isShow = !this.list[i].isShow;
  }
  listChrenClick(i, ai) {
    // let item = this.list[i].arr[ai]
    // this.navCtrl.push('EquipmentinfoPage', {
    //   title: '我是上一个界面搞来的'
    // })
    const self = this;
    const userinfo = {
    }
    self.http.post('/web/trainingcoach/getList', userinfo, function (res, msg) {
      if (res.statusCode === 200) {
      } else {
        self.alertMsg(res.statusMessage);
      }
    }, function (msg) {

    });
  }
  alertMsg(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      cssClass: 'toast-message', // 目前没用 添加的位置不是想要的
      position: 'bottom', // “top”，“middle”，“bottom”。
      duration: 3000
    });
    toast.present();
  }

}
