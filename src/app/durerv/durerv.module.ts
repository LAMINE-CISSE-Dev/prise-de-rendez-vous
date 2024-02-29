import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DurervPageRoutingModule } from './durerv-routing.module';

import { DurervPage } from './durerv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DurervPageRoutingModule
  ],
  declarations: [DurervPage]
})
export class DurervPageModule {}
