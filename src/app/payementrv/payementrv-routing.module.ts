import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayementrvPage } from './payementrv.page';

const routes: Routes = [
  {
    path: '',
    component: PayementrvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayementrvPageRoutingModule {}
