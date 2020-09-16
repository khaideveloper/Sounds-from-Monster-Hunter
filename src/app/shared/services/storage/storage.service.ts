import { Monster, monsters } from './../../../models/monsters.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public storageChecked: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** Monsters array */
  monsters : Array<Monster> = new Array<Monster>();

  canLoad: boolean = true;

  constructor(
    private storage: Storage,
  ) {

  }

  /** Initialize every monster on the list */
  init() {
    monsters.forEach((element) => {
      let monster = new Monster(
        element.name.split('_').join(' '),
        'https://www.googleapis.com/drive/v2/files/' + element.audio_code + '?alt=media&source=downloadUrl',
        //'https://docs.google.com/uc?export=download&id=' + element.audio_code,
        'https://i.imgur.com/' + element.img_code + '.png');
      monster.audio = new Audio();
      this.monsters.push(monster);
    });
    this.loadData();
  }

  saveImage(monster: Monster, base64: string) : Promise<any> {
    monster.imgSRC = base64;
    return this.storage.set('image_' + monster.name, base64);
  }

  removeImage(monster: Monster) {
    this.storage.remove('image_' + monster.name)
    .then(() => { monster.cloud = false; monster.isCloudLoading = false; });
  }

  loadData() {
    if(!this.canLoad) { return; }
    this.canLoad = false;
    window.setTimeout(() => { this.canLoad = true; }, 10000);
    let length = 0;
    this.storage.length().then((value) => {
      if(value == null || value === 0) { return; }
      length = value;
      this.storage.forEach((value, key, index) => {
        if(key.includes('image_')) {
          if(value == null || typeof value !== 'string' || value === '') { return; }
          let monster = this.monsters.find((a) => { return a.name === key.split('image_')[1]; });
          if(monster == null) { return; }
          monster.imgSRC = value;
          monster.cloud = true;
        }
        else if(key.includes('audio_')) {
  
        }
        if(index === (length-1)) {
          this.monsters.forEach((value) => { if(value.cloud == null) { value.cloud = false; } });
          this.storageChecked.next(true);
        }
      });
    });
  }

}
