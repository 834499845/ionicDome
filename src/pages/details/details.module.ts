import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPage } from './details';

@NgModule({
  declarations: [
    DetailsPage,
  ],
  entryComponents: [
  ],
  imports: [
    IonicPageModule.forChild(DetailsPage),
  ],
})
export class DetailsPageModule {}
