import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablPageRoutingModule } from './tabl-routing.module';

import { TablPage } from './tabl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablPageRoutingModule
  ],
  declarations: [TablPage]
})
export class TablPageModule {}
