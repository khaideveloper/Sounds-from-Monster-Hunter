import { Monster } from './../../../models/monsters.model';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage,
  ) {

  }

  saveImage(monster: Monster, base64: string) {
    this.storage.set('image_' + monster.name, base64);
  }

}
