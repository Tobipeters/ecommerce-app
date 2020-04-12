import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public whatsapp = 'https://api.whatsapp.com/send?phone=+2348167764664';
  public twitter = 'https://twitter.com/Peters_tsticks';
  public github = '';
  public linkedin = 'https://www.linkedin.com/in/oluwatobi-taiwo-b19860177';



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
