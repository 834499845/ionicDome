import { Component, ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;

  tab1Root = HomePage;
  tab2Root = 'LogPage';
  tab4Root = 'SettingPage';

  constructor() {

  }
}
