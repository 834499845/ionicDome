import { ModalRegisteredPage } from './modal-registered';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ModalRegisteredPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalRegisteredPage),
  ],
  exports: [
    ModalRegisteredPage
  ]
})
export class ModalRegisteredPageModule {}
