import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '../shared/services/translate/translate.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  //#region Variables

  toast: HTMLIonToastElement;

  //#endregion

  //#region Init

  constructor(
    private router: Router,
    public translate_service: TranslateService,
    public toastController: ToastController
  ) {

  }

  //#endregion

  //#region 

  @HostListener('click',['$event'])
  async clickOnCat(event: MouseEvent) {
    if(event == null || !(<HTMLImageElement>event.target).classList.contains('cat_icon')) { return }
    if(this.toast != null) {
      this.toast.dismiss();
      this.toast.remove();
      this.toast = null;
    }
    this.toast = await this.toastController.create({
      message: this.translate_service.translate('CAT_TOAST'),
      duration: 1250,
      position: 'bottom'
    });
    this.toast.present();
  }

  gotoHome(){
    this.router.navigateByUrl('/tabs/soundboard')
  }

  //#endregion

}
