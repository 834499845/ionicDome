import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsLogPage } from './details-log';

@NgModule({
  declarations: [
    DetailsLogPage,
  ],
  entryComponents: [
    DetailsLogPage
  ],
  imports: [
    IonicPageModule.forChild(DetailsLogPage),
  ],
})
export class DetailsLogPageModule {}
