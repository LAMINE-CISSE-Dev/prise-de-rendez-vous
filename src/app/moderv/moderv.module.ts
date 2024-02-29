import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModervPageRoutingModule } from './moderv-routing.module';

import { ModervPage } from './moderv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModervPageRoutingModule
  ],
  declarations: [ModervPage]
})
export class ModervPageModule {}
