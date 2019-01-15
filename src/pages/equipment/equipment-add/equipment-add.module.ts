import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipmentAddPage } from './equipment-add';

@NgModule({
  declarations: [
    EquipmentAddPage,
  ],
  entryComponents: [
    EquipmentAddPage
  ],
  imports: [
    IonicPageModule.forChild(EquipmentAddPage),
  ],
})
export class EquipmentAddPageModule { }
