import { TranslateService } from './../../../shared/services/translate/translate.service';
import { SettingsService } from '../../../shared/services/settings/settings.service';
import { Component } from '@angular/core';

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
  ) {
    
  }

  //#endregion

  //#region 

  //#endregion

}
