import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsAnalysisPage } from './details-analysis';

@NgModule({
  declarations: [
    DetailsAnalysisPage,
  ],
  entryComponents: [
    DetailsAnalysisPage
  ],
  imports: [
    IonicPageModule.forChild(DetailsAnalysisPage),
  ],
})
export class DetailsAnalysisPageModule {}
