import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfosPage } from '../pages/infos/infos';

import { Facebook } from '@ionic-native/facebook'
import { NativeStorage } from '@ionic-native/native-storage';
import { QualsProvider } from '../providers/qual.service';
import { HttpModule } from '@angular/http';

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
    InfosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    NativeStorage,
    QualsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
