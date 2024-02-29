import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationrvPageRoutingModule } from './validationrv-routing.module';

import { ValidationrvPage } from './validationrv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationrvPageRoutingModule
  ],
  declarations: [ValidationrvPage]
})
export class ValidationrvPageModule {}
