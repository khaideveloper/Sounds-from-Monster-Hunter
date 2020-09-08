import { Component } from '@angular/core';
import { monsters } from './monsters.model';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

export class Monster {
  name : string;
  audioSRC : string;
  audio: HTMLAudioElement;
  imgSRC : string;
  show : boolean;
  constructor(name? : string, audioSRC? : string, imgSRC? : string) {
    if(name != null) { this.name = name; }
    if(audioSRC != null) { this.audioSRC = audioSRC; }
    if(imgSRC != null) { this.imgSRC = imgSRC; }
    this.show = false;
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

  constructor(
    private nativeAudio: NativeAudio
  ) {
    
    monsters.forEach((element) => {
      let monster = new Monster( element.split('_').join(' '), 'assets/audio/' + element + '.mp3', '/assets/image/' + element + '.png');
      this.monsters.push(monster);
      this.nativeAudio.preloadSimple(monster.name, monster.audioSRC);
    });
    
  }

  /** Play a monster audio */
  playAudio(monster : Monster) {
    this.nativeAudio.play(monster.name);
    console.log(monster);
  }


}
