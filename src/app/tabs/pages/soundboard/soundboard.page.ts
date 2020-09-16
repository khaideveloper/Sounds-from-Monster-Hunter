import { StorageService } from './../../../shared/services/storage/storage.service';
import { TranslateService } from './../../../shared/services/translate/translate.service';
import { SettingsService } from '../../../shared/services/settings/settings.service';
import { Component } from '@angular/core';
import { monsters, Monster } from '../../../models/monsters.model';
import { Platform } from '@ionic/angular';
import { Base64 } from '@ionic-native/base64/ngx';

@Component({
  selector: 'app-soundboard',
  templateUrl: 'soundboard.page.html',
  styleUrls: ['soundboard.page.scss']
})
export class SoundboardPage {

  //#region Variables

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
    private base64: Base64,
  ) {
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
    this.cloudImage(monster);
    this.cloudAudio(monster);
  }

  cloudAudio(monster: Monster) {  
    var xhr = new XMLHttpRequest(),
    audioContext = new AudioContext(),
    source = audioContext.createBufferSource();
    xhr.onload = function() {
      console.log(xhr.response);
    };
    xhr.onerror = function() { console.log('An error occurred'); };

    xhr.open('GET', encodeURI(monster.audioSRC), true);
    xhr.responseType = 'arraybuffer';
    xhr.send();
  }

  cloudImage(monster: Monster) {
    monster.isCloudLoading = true;
    if(monster.cloud) {
      this.storage_service.removeImage(monster);
      return;
    }
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      let canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d").drawImage(img, 0, 0);
      let dataURL = canvas.toDataURL("image/png");
      if(dataURL == null || dataURL === '') { return; }
      this.storage_service.saveImage(monster,dataURL)
      .then(() => { monster.cloud = !monster.cloud; })
      .finally(() => { monster.isCloudLoading = false; });
    };
    img.onerror = () => { monster.isCloudLoading = false; };
    img.src = monster.imgSRC;
  }

  doRefresh(event) {
    let sub = this.storage_service.storageChecked.subscribe((value) => { if(value) { event.target.complete(); } });
    this.storage_service.loadData();
    setTimeout(() => {
      if(sub != null) { sub.unsubscribe(); }
      event.target.complete();
    }, 8000);
  }

  //#endregion

}
