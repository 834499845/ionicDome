import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { LoginPage } from "../login/login";

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public platform: Platform) {
    this.dir = platform.dir();
    this.slides = [
      {
        title: '1',
        description: '1',
        image: 'assets/imgs/12@3x.png',
      },
      {
        title: '2',
        description: ' 2',
        image: 'assets/imgs/18@3x.png',
      },
      {
        title: '3',
        description: '3',
        image: 'assets/imgs/logo.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.setRoot(LoginPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

}
