import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleFilePage } from './single-file';

@NgModule({
  declarations: [
    SingleFilePage,
  ],
  imports: [
    IonicPageModule.forChild(SingleFilePage),
  ],
})
export class SingleFilePageModule {}
