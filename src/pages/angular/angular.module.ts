import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AngularPage } from './angular';

@NgModule({
  declarations: [
    AngularPage,
  ],
  imports: [
    IonicPageModule.forChild(AngularPage),
  ],
})
export class AngularPageModule {}
