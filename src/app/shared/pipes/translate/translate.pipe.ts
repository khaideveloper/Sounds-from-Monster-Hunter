import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../../services/translate/translate.service';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {

  //#region Variables

  //#endregion

  //#region Init

  constructor(
    private translate_service: TranslateService
  ) {

  }

  //#endregion

  //#region Pipe

  /** Translate the passed key */
  transform(key: string): any {
    if(key == null) { return ''; }
    key = key.toUpperCase();
    return (this.translate_service.data[key] != null) ? this.translate_service.data[key] : key;
  }

  //#endregion

}
