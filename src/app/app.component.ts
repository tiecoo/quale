import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { HttpModule } from '@angular/http';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { HomePage } from '../pages/home/home';
import { InfosPage } from '../pages/infos/infos';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;
  user: any;
  userReady: boolean = false;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public nativeStorage: NativeStorage) {
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

    this.pages = [
      { title: 'Estabelecimentos', component: InfosPage }
    ];
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      //  pushsetup();
    });
  //
  // function pushsetup() {
  //   const options: PushOptions = {
  //        android: {
  //            senderID: '973493219172'
  //        },
  //        ios: {
  //            alert: 'true',
  //            badge: true,
  //            sound: 'false'
  //        },
  //        windows: {}
  //     };
  //
  //     const pushObject: PushObject = this.push.init(options);
  //
  //     pushObject.on('notification').subscribe((notification: any) => {
  //       if (notification.additionalData.foreground) {
  //         let youralert = this.alertCtrl.create({
  //           title: 'New Push notification',
  //           message: notification.message
  //         });
  //         youralert.present();
  //       }
  //     });
  //
  //     pushObject.on('registration').subscribe((registration: any) => {
  //        //do whatever you want with the registration ID
  //     });
  //
  //     pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  //     }

  }
}
