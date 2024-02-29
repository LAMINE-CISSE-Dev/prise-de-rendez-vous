import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumervPageRoutingModule } from './resumerv-routing.module';

import { ResumervPage } from './resumerv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumervPageRoutingModule
  ],
  declarations: [ResumervPage]
})
export class ResumervPageModule {}
