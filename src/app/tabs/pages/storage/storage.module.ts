import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, Platform } from '@ionic/angular';

import { StoragePageRoutingModule } from './storage-routing.module';

import { StoragePage } from './storage.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StoragePageRoutingModule,
    SharedModule,
  ],
  declarations: [
    StoragePage,
  ],
  providers: [
    Platform,
  ]
})
export class StoragePageModule { }
