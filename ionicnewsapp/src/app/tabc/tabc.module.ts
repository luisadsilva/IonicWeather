import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { TabcPageRoutingModule } from './tabc-routing.module';

import { TabcPage } from './tabc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabcPageRoutingModule
  ],
  declarations: [TabcPage]
})
export class TabcPageModule {}
