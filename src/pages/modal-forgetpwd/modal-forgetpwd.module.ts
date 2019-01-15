import { ModalForgetpwdPage } from './modal-forgetpwd';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ModalForgetpwdPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalForgetpwdPage),
  ],
  exports: [
    ModalForgetpwdPage
  ]
})
export class ModalForgetpwdPageModule {}
