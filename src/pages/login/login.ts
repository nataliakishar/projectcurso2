import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  usuarioObj = {
    usuario : '',
    senha : '',
    telefone : ''
  };
 

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  salvar(){

    console.log('usuario', this.usuarioObj.usuario);
    console.log('senha', this.usuarioObj.senha);
    console.log('telefone', this.usuarioObj.telefone);

    let dados = 'Usuário:' + this.usuarioObj.usuario;'Senha' + this.usuarioObj.senha + '; Telefone' + this.usuarioObj.telefone

    const alert = this.alertCtrl.create({
      title: 'Usuário',
      subTitle: dados,
      buttons: ['OK']
    });
    alert.present();
  }



  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Salvar seus dados?',
      message: 'Quer realmente salvar seus dados?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  redirecionarlogin(){
    this.navCtrl.push('ContactoPage');
  }

}
