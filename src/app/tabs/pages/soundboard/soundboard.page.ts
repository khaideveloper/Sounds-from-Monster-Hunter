import { StorageService } from './../../../shared/services/storage/storage.service';
import { TranslateService } from './../../../shared/services/translate/translate.service';
import { SettingsService } from '../../../shared/services/settings/settings.service';
import { Component } from '@angular/core';
import { Monster } from '../../../models/monsters.model';
import { ModalController, Platform } from '@ionic/angular';
import { ImageDialogComponent } from 'src/app/shared/components/image-dialog/image-dialog.component';

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
    public modalController: ModalController,
  ) {
    this.storage_service.monsters.forEach((monster) => {
      monster.loading = true;
      monster.audio.onloadeddata = (() => { monster.loading = false; });
      monster.audio.onerror = (() => { monster.loading = false; });
      monster.audio.src = monster.audioSRC;
      monster.audio.preload = 'auto';
    });
  }

  //#endregion

  //#region Audio

  /** Play a monster audio */
  playAudio(monster : Monster) {
    // If the audio hasn't ended, then end it
    if((this.current != null && !this.current.paused) && !this.settings_service.settings.hasOverflow) { this.resetCurrent(monster.audio); }
    //If the audio is not playing, reset it
    if(monster.audio.paused || monster.audio.ended) {
      //Set the current selected volume
      monster.audio.volume = this.settings_service.settings.volume;
      //Set the current audio as the selected
      this.current = monster.audio;
      //When the audio ends, reset it
      monster.audio.onended = (() => { this.resetCurrent(monster.audio); }); 
      //Play the audio
      if(monster.audio.paused) { monster.audio.play(); }
    }
    //If the audio is playing, end it
    else { this.resetCurrent(monster.audio); }
  }

  /** Reset the current audio */
  resetCurrent(audio: HTMLAudioElement) {
    this.current.pause();
    this.current.currentTime = 0;
    this.current = null;
    audio.pause();
    audio.currentTime = 0;
  }

  //#endregion

  //#region Methods

  expand(monster: Monster) {
    monster.expanded = !monster.expanded;
    if(monster.expanded) { this.storeImage(monster); }
  }

  /** Send the image to the storage */
  storeImage(monster: Monster) {
    //If the monster is saved on the cloud, don't do anything
    if(monster.stored || !this.settings_service.settings.saveImages) { return; }
    //Create a new image canvas to convert the image to base64
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      let canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d").drawImage(img, 0, 0);
      let dataURL = canvas.toDataURL("image/png");
      //If the conversion was succesful, store the image
      if(dataURL != null && dataURL !== '') {
        this.storage_service.saveImage(monster,dataURL)
        //When the storing is done, mark the image as saved
        .then(() => { monster.stored = !monster.stored; })
      }
    };
    /** Create the image */
    img.src = monster.imgSRC;
  }

  /** Show a modal of the image selected */
  async showImage(monster: Monster) {
    const modal = await this.modalController.create({
      component: ImageDialogComponent,
      componentProps: { image: monster.imgSRC }
    });
    return await modal.present();
  }

  //#endregion

}
