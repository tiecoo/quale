import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { QualsProvider } from '../../providers/qual.service';
import { RestaurantsPage } from '../restaurants/restaurants';

/**
 * Generated class for the InfosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html',
})
export class InfosPage {
  user: any;
  userReady: boolean = false;
  estabelecimentos: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage, public qual: QualsProvider) {
  }

  ionViewDidLoad() {
    this.qual.getEstabelecimentos().subscribe(estabelecimentos => {
      this.estabelecimentos = estabelecimentos['docs'];
      console.log(estabelecimentos['docs']);
      });
    this.nativeStorage.getItem('user')
    .then((data) => {
      console.log(JSON.stringify(data));
        this.user = {
          name: data.name,
          email: data.email,
          picture: data.picture
        };
        this.userReady = true;
      }, (error) => {
        console.log(error);
      });
    console.log('ionViewDidLoad InfosPage');
  }
  gotoinfo(){
    this.navCtrl.setRoot(RestaurantsPage);
  }

}
