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
    if(monster.audio.paused) {
      monster.audio.src = monster.audioSRC;
      monster.audio.play();
    } else {
      monster.audio.pause();
      monster.audio.currentTime = 0;
    }
  }

  //#endregion

}
