import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { TutorialPage } from "../pages/tutorial/tutorial";

import { Camera } from '@ionic-native/camera';
import { CameraProvider } from "../providers/utils/camera.provider";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { HttpServeProvider } from '../providers/http-serve/http-serve';


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    // 新页面
    LoginPage,
    TutorialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      backButtonText: '返回',
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    // 新页面
    LoginPage,
    TutorialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpServeProvider,
    HttpClientModule,
    CameraProvider,
    Camera,

  ]
})
export class AppModule { }
