import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()  
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  redirecionarentrar(){
    this.navCtrl.push('CursoPage');
  }

}
