import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriePageRoutingModule } from './historie-routing.module';

import { HistoriePage } from './historie.page';
import { IonicStorageModule } from '@ionic/Storage';

@NgModule({
  imports: [
    IonicStorageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriePageRoutingModule
  ],
  declarations: [HistoriePage]
})
export class HistoriePageModule {}
