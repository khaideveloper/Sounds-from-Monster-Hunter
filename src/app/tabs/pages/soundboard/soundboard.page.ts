import { StorageService } from './../../../shared/services/storage/storage.service';
import { TranslateService } from './../../../shared/services/translate/translate.service';
import { SettingsService } from '../../../shared/services/settings/settings.service';
import { Component } from '@angular/core';
import { monsters, Monster } from '../../../models/monsters.model';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-soundboard',
  templateUrl: 'soundboard.page.html',
  styleUrls: ['soundboard.page.scss']
})
export class SoundboardPage {

  //#region Variables

  /** Monsters array */
  monsters : Array<Monster> = new Array<Monster>();

  /** Current serach string */
  search: string = '';

  /** Currently Playing */
  current: HTMLAudioElement;

  //#endregion

  //#region Init

  constructor(
    public platform: Platform,
    public settings_service: SettingsService,
    public translate_service: TranslateService,
    public storage_service: StorageService,
  ) {
    this.initMonsters();
  }

  /** Initialize every monster on the list */
  initMonsters() {
    monsters.forEach((element) => {
      let monster = new Monster(
        element.name.split('_').join(' '),
        'https://docs.google.com/uc?export=download&id=' + element.audio_code,
        'https://i.imgur.com/' + element.img_code + '.png');
      monster.audio = new Audio();
      this.monsters.push(monster);
    });
  }

  //#endregion

  //#region Audio

  /** Play a monster audio */
  playAudio(monster : Monster) {
    monster.audio.currentTime = 0;
    //TODO: This code sucks
    if(this.current != null && !this.settings_service.settings.hasOverflow) {
      this.current.pause();
      this.current.currentTime = 0;
      this.current = null;
    }
    if(monster.audio.paused) {
      monster.audio.src = monster.audioSRC;
      monster.audio.volume = this.settings_service.settings.volume;
      this.current = monster.audio;
      monster.audio.onended = (() => {
        monster.audio.pause();
        monster.audio.currentTime = 0;
        this.current = null;
      }); 
      monster.audio.play();
    } else {
      monster.audio.pause();
      monster.audio.currentTime = 0;
      this.current = null;
    }
  }

  //#endregion

  //#region Methods

  cloud(monster: Monster) {
    monster.cloud = !monster.cloud;
    this.convertToDataURLviaCanvas(monster);
  }

  convertToDataURLviaCanvas(monster: Monster){
    return new Promise( (resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext("2d").drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        this.storage_service.saveImage(monster,dataURL);
        return dataURL;
      };
      img.src = monster.imgSRC;
    });
  }

  //#endregion

}
