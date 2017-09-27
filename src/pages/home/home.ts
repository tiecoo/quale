import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { NavController, AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { InfosPage } from '../infos/infos';

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userProfile: any = null;
  constructor(public navCtrl: NavController, private facebook: Facebook, public nativeStorage: NativeStorage, private alertCtrl: AlertController) {}

  facebookLogin(): void {
    let nav = this.navCtrl;
    this.facebook.login(['email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.nativeStorage.setItem('user',
          {

            name: success.displayName,
            email: success.email,
            picture: success.photoURL
          })
          .then(() => {
            nav.setRoot(InfosPage);
          },(error) => {
            console.log(error);
          });
          this.userProfile = success;
        })
        .catch((error) => {
          console.log("Firebase failure: " + JSON.stringify(error));
      });

    }).catch((error) => { console.log(error) });
  }
}
