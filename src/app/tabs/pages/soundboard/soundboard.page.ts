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
  ) {
    this.initMonsters();
  }

  /** Initialize every monster on the list */
  initMonsters() {
    monsters.forEach((element) => {
      let monster = new Monster( element.split('_').join(' '), 'assets/audio/' + element + '.mp3', '/assets/image/' + element + '.png');
      monster.audio = new Audio();
      this.monsters.push(monster);
    });
  }

  //#endregion

  //#region Audio

  /** Play a monster audio */
  playAudio(monster : Monster) {
    //TODO: This code sucks
    if(this.current != null && !this.settings_service.settings.hasOverflow) {
      monster.audio.pause();
      monster.audio.currentTime = 0;
      this.current = null;
    }
    if(monster.audio.paused) {
      monster.audio.src = monster.audioSRC;
      monster.audio.volume = this.settings_service.settings.volume;
      this.current = monster.audio;
      monster.audio.play()
      .then(() => {
        if(!monster.audio.paused) {
          monster.audio.pause();
          monster.audio.currentTime = 0;
          this.current = null;
        }
      })
      .finally(() => {
        if(!monster.audio.paused) {
          monster.audio.pause();
          monster.audio.currentTime = 0;
          this.current = null;
        }
      });
      setTimeout(() => {
        if(!monster.audio.paused) {
          monster.audio.pause();
          monster.audio.currentTime = 0;
          this.current = null;
        }
      }, 10000);
    } else {
      monster.audio.pause();
      monster.audio.currentTime = 0;
      this.current = null;
    }
  }

  //#endregion

}
