import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SoundboardPage } from './soundboard.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SoundboardPageRoutingModule } from './soundboard-routing.module';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SoundboardPageRoutingModule,
  ],
  declarations: [SoundboardPage],
  providers: [
    NativeAudio
  ]
})
export class SoundboardPageModule {}
