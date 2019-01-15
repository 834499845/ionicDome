import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsSettingPage } from './details-setting';

@NgModule({
  declarations: [
    DetailsSettingPage,
  ],
  entryComponents: [
    DetailsSettingPage
  ],
  imports: [
    IonicPageModule.forChild(DetailsSettingPage),
  ],
})
export class DetailsSettingPageModule {}
