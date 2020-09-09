import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  toggles = ['canSearch', 'hasImage'];

  toggles_i18n = {
    canSearch: 'Enable/Disable Search',
    hasImage: 'Enable/Disable Images'
  };

  canSearch: boolean = true;

  hasImage: boolean = true;

  constructor(
    private storage: Storage
    ) {
      this.loadSettings();
    }

  saveSettings() {
    this.toggles.forEach((value) => { this.storage.set(value,this[value]); });
  }

  loadSettings() {
    this.toggles.forEach((value) => { this.storage.get(value).then((a) => { this[value] = a; }); });
  }

}
