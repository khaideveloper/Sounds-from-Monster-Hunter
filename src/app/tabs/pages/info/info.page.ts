import { TranslateService } from './../../../shared/services/translate/translate.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info',
  templateUrl: 'info.page.html',
  styleUrls: ['info.page.scss']
})
export class InfoPage {

  //#region Variables

  version: string = environment.version;

  //#endregion

  //#region Init

  constructor(
    public translate_service: TranslateService,
  ) {

  }

  //#endregion

  //#region 

  //#endregion

}
