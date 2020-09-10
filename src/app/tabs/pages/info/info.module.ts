import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoPage } from './info.page';
import { InfoPageRoutingModule } from './info-routing.module';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InfoPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    InfoPage,
  ]
})
export class InfoPageModule { }
