import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsPage } from './settings.page';
import { SettingsPageRoutingModule } from './settings-routing.module'
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SettingsPage }]),
    SettingsPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    SettingsPage,
  ]
})
export class SettingsPageModule { }
