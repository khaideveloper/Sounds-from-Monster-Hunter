import { Component } from '@angular/core';
import { monsters } from './monsters.model';
import { Platform } from '@ionic/angular';

export class Monster {
  name : string;
  audioSRC : string;
  audio: HTMLAudioElement;
  imgSRC : string;
  expanded : boolean;
  playing: boolean;
  constructor(name? : string, audioSRC? : string, imgSRC? : string) {
    if(name != null) { this.name = name; }
    if(audioSRC != null) { this.audioSRC = audioSRC; }
    if(imgSRC != null) { this.imgSRC = imgSRC; }
    this.expanded = false;
    this.playing = false;
  }
}

export class MonsterAudio {
  audio : HTMLAudioElement;
  status : boolean;
  constructor(audio : HTMLAudioElement = null, status : boolean = null) {
    this.audio = audio;
    this.status = status;
  }
}

@Component({
  selector: 'app-soundboard',
  templateUrl: 'soundboard.page.html',
  styleUrls: ['soundboard.page.scss']
})
export class SoundboardPage {

  monsters : Array<Monster> = new Array<Monster>();

  search: string = '';

  constructor(
    public platform: Platform
  ) {
    
    monsters.forEach((element) => {
      let monster = new Monster( element.split('_').join(' '), 'assets/audio/' + element + '.mp3', '/assets/image/' + element + '.png');
      monster.audio = new Audio();
      monster.audio.src = monster.audioSRC;
      this.monsters.push(monster);
    });
    
  }

  /** Play a monster audio */
  playAudio(monster : Monster) {
    if(monster.audio.paused) {
      monster.audio.play();
    } else {
      monster.audio.pause();
      monster.audio.currentTime = 0;
    }
  }


}
