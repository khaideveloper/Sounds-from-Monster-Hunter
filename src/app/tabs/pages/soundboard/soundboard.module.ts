import { IonicModule, Platform } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SoundboardPage } from './soundboard.page';
import { SoundboardPageRoutingModule } from './soundboard-routing.module';
import { SharedModule } from 'src/app/shared.module';
import { ImageDialogComponent } from 'src/app/shared/components/image-dialog/image-dialog.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SoundboardPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    SoundboardPage,
    ImageDialogComponent,
  ],
  providers: [
    Platform,
  ],
})
export class SoundboardPageModule {
  
}
