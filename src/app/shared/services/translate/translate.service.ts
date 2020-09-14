import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Languages, LanguagesData } from 'src/app/models/translate.model';

@Injectable({ providedIn: 'root' })
export class TranslateService {

  //#region Variables

  /** Currently active language */
  public currentLanguage: string;

  /** Translation Data */
  public data: any = { };

  /** Evento che viene lanciato al cambio di lingua */
  public langChanged: EventEmitter<string> = new EventEmitter<string>();

  /** Ref to the const Languages for the HTML */
  public _Languages = Languages;

  //#endregion

  //#region Init

  constructor(
    private storage: Storage
  ) {

  }

  /** Language initialization */
  init() {
    this.loadLanguage();
  }

  //#endregion

  //#region Translation

  /** Load the last used language */
  loadLanguage() {
    this.storage.get('language')
    .catch((ex) => { console.error(ex); })
    //If the loaded language doesn't esist or is null, load the first language of the list
    .then((value) => {
      if(value != null) {
        let find = Languages.find((a) => { return a === value; });
        if(find != null) { this.use(find); return; }
      }
      this.use(Languages[0]);
    });
  }

  /** Save the current language */
  saveLanguage() { this.storage.set('language', this.currentLanguage); }

  /** Translate the passed key smilar to how the pipe works */
  translate(key: string) {
    if(key == null) { return ''; }
    key = key.toUpperCase();
    return (this.data[key] != null) ? this.data[key] : key;
  }

  /** Select the passed language */
  use(lang: string) {
    //Check if it is valid
    if(lang === '' || lang == null || Languages.find((a) => { return a === lang; }) == null) { return; }
    //Get the language data
    this.data = JSON.parse(JSON.stringify(LanguagesData[lang] || {}));
    //Set the current language
    this.currentLanguage = lang;
    //Emit that the language has changed
    this.langChanged.emit(lang);
    //Salvo la lingua
    this.saveLanguage();
  }

  //#endregion

}
