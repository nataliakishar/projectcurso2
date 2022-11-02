import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-curso',
  templateUrl: 'curso.html',
})
export class CursoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  redirecionardetalhes(){
    this.navCtrl.push('AngularPage');
  }

  redirecionardetalhes2(){
    this.navCtrl.push('Css3Page');
  }

  redirecionardetalhes3(){
    this.navCtrl.push('HtmlPage');
  }

  redirecionardetalhes4(){
    this.navCtrl.push('JavaScriptPage');
  }

  redirecionardetalhes5(){
    this.navCtrl.push('');
  }

  redirecionardetalhes6(){
    this.navCtrl.push('');
  }

}
