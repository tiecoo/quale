import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfosPage } from '../pages/infos/infos';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { FavoritesPage } from '../pages/favorites/favorites';
import { PointsPage } from '../pages/points/points';
import { ScannerPage } from '../pages/scanner/scanner';

import { Facebook } from '@ionic-native/facebook'
import { NativeStorage } from '@ionic-native/native-storage';
import { QualsProvider } from '../providers/qual.service';
import { HttpModule } from '@angular/http';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
firebase.initializeApp({
  apiKey: "AIzaSyAABt0w18uKLNH9Oyo9o9ONG7X-Dq59Ej4",
  authDomain: "qualaboa-68e64.firebaseapp.com",
  databaseURL: "https://qualaboa-68e64.firebaseio.com",
  projectId: "qualaboa-68e64",
  storageBucket: "qualaboa-68e64.appspot.com",
  messagingSenderId: "973493219172"
});
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfosPage,
    RestaurantsPage,
    FavoritesPage,
    PointsPage,
    ScannerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfosPage,
    RestaurantsPage,
    FavoritesPage,
    PointsPage,
    ScannerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    NativeStorage,
    QualsProvider,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
