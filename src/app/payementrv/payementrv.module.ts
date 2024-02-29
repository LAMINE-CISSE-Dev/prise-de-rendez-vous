import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayementrvPageRoutingModule } from './payementrv-routing.module';

import { PayementrvPage } from './payementrv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayementrvPageRoutingModule
  ],
  declarations: [PayementrvPage]
})
export class PayementrvPageModule {}
