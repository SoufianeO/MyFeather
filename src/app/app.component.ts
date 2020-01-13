import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  )
  {
    var firebaseConfig = {
      apiKey: "AIzaSyCKEM-Y1Zzr19fcoNNocl_oSBXHh4TNCLw",
      authDomain: "myfeather-40167.firebaseapp.com",
      databaseURL: "https://myfeather-40167.firebaseio.com",
      projectId: "myfeather-40167",
      storageBucket: "myfeather-40167.appspot.com",
      messagingSenderId: "638396231735",
      appId: "1:638396231735:web:d3655bfd510910d3e20fb2"
    };
    firebase.initializeApp(firebaseConfig);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
