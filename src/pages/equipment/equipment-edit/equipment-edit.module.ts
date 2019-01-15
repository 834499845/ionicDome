import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipmentEditPage } from './equipment-edit';

@NgModule({
  declarations: [
    EquipmentEditPage,
  ],
  entryComponents: [
    EquipmentEditPage
  ],
  imports: [
    IonicPageModule.forChild(EquipmentEditPage),
  ],
})
export class EquipmentEditPageModule { }
