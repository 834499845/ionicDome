import { Component } from '@angular/core';
import { ActionSheetController, LoadingController, IonicPage, NavParams, ViewController } from 'ionic-angular';
import { CameraProvider } from "../../providers/utils/camera.provider";
@IonicPage()
@Component({
  selector: 'page-modal-registered',
  templateUrl: 'modal-registered.html',
})
export class ModalRegisteredPage {
  placeholder = 'assets/imgs/5@3x.png';
  chosenPicture: any;
  constructor(
    public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNavPage');
  }

  changePicture() {

    const actionsheet = this.actionsheetCtrl.create({
      title: '上传图片',
      buttons: [
        {
          text: '相机',
          icon: 'camera',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'ios' ? '安卓' : 'Ios camera roll',
          icon: 'ios' ? 'image' : null,
          handler: () => {
            this.getPicture();
          }
        },
        {
          text: '取消',
          icon: 'ios' ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }

  takePicture() {
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
    }, error => {
      alert(error);
    });
  }

  getPicture() {
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
    }, error => {
      alert(error);
    });
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
