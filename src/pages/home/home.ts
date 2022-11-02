import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];

  constructor(public navCtrl: NavController) {
    for (let index = 0; index < 1; index++) {
      let element = {

        usuario: 'Angular' + index, 
        texto: 'Informações' + index, 
      };
      this.items.push({element});
    }
   

  }

}
