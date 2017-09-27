import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { HttpModule } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { InfosPage } from '../pages/infos/infos';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = InfosPage;
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
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
