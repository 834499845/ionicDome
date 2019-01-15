import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsRealPage } from './details-real';

@NgModule({
  declarations: [
    DetailsRealPage,
  ],
  entryComponents: [
    DetailsRealPage
  ],
  imports: [
    IonicPageModule.forChild(DetailsRealPage),
  ],
})
export class DetailsRealPageModule {}
