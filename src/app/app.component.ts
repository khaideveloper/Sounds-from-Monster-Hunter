import { StorageService } from './shared/services/storage/storage.service';
import { TranslateService } from './shared/services/translate/translate.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  //#region Variables

  //#endregion

  //#region Init
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate_service: TranslateService,
    private storage_service: StorageService,
  ) {
    this.storage_service.init();
    this.initializeApp();
  }

  /** Initialize the app */
  initializeApp() {
    this.platform.ready()
    .catch((ex) => { console.error(ex); })
    .then(() => {
      this.translate_service.init();
      this.statusBar.backgroundColorByHexString('#7a212f')
      this.statusBar.styleBlackOpaque();
      this.splashScreen.hide();
    });
  }

  //#endregion

  //#region 

  //#endregion

}
