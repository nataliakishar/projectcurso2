import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JavaScriptPage } from './java-script';

@NgModule({
  declarations: [
    JavaScriptPage,
  ],
  imports: [
    IonicPageModule.forChild(JavaScriptPage),
  ],
})
export class JavaScriptPageModule {}
