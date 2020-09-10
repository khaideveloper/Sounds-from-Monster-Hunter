import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export class Settings {
  /** If the search is enabled */
  canSearch: boolean = true;
  /** If the images are enabled */
  hasImage: boolean = true;
  /** Current app volume */
  volume: number = 0.25;
  /** If the audio can play one over another */
  hasOverflow: boolean = false;
}

@Injectable({ providedIn: 'root' })
export class SettingsService {

  //#region Variables
  
  /** The current settings of the app */
  settings: Settings = new Settings();

  /** Every key inside the settings, used to loop through them */
  settingsKeys = Object.keys(this.settings);

  /** If the settings were changed */
  dirty: boolean = false;

  //#endregion

  //#region Init

  constructor(
    private storage: Storage,
  ) {
    this.loadSettings();
  }

  //#endregion

  //#region Storage

  /** Saves the current settings to the local storage */
  saveSettings() {
    if(!this.dirty) { return; }
    this.settingsKeys.forEach((value) => { this.storage.set(value,this[value]); });
  }

  /** Loads the current settings from the local storage */
  loadSettings() {
    this.settingsKeys.forEach((value) => {
      this.storage.get(value)
      .catch((ex) => { console.error(ex); })
      .then((a) => {
        if(a != null) { this[value] = a; }
        else { this.storage.set(value, this[value]); }
      })
    });
  }

  //#endregion

}
