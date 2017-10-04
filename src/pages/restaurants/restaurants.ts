import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantsPage');
  }
  avaliar() {
    let alert = this.alertCtrl.create({
        title: 'Avaliar',
        subTitle: 'Avalie o estabelecimento de 0-10',
        inputs: [
          {
            name: 'Nota',
            // placeholder: '0-10',
            type: 'range',
            max: 10,
            min: 0
          },
          {
            placeholder: 'Comentário'
          },
        ],
        buttons: ['Avaliar']
      });
    alert.present();
  }
  favoritar() {
    let alert = this.alertCtrl.create({
        title: 'Favorito',
        subTitle: 'estabelecimento foi adicionado a sua lista de favoritos',
        buttons: ['Fechar']
      });
    alert.present();
  }

  trocar() {
    let alert = this.alertCtrl.create({
        title: 'Trocando pontos',
        subTitle: 'Seu código promocional é : CD4321AB, se divirta!',
        buttons: ['Fechar']
      });
    alert.present();
  }


}
