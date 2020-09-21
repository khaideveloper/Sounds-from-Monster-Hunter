import { TranslateService } from './../../../shared/services/translate/translate.service';
import { SettingsService } from '../../../shared/services/settings/settings.service';
import { Component } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  //#region Variables

  //#endregion

  //#region Init

  constructor(
    public settings_service: SettingsService,
    public translate_service: TranslateService,
    public storage_service: StorageService,
  ) {
    
  }

  //#endregion

  //#region 

  /** Change the current language */
  changeLanguage() {
    this.translate_service.use(this.translate_service.currentLanguage);
  }

  /** Set the settings as dirty */
  dirty() {
    this.settings_service.dirty = true;
    //TODO: Right now it's always saving the settings
    this.settings_service.saveSettings();
  }

  //#endregion

}
