import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsermanagementPage } from './usermanagement';

@NgModule({
  declarations: [
    UsermanagementPage,
  ],
  imports: [
    IonicPageModule.forChild(UsermanagementPage),
  ],
})
export class UsermanagementPageModule {}
