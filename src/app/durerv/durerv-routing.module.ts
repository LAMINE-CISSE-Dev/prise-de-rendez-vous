import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DurervPage } from './durerv.page';

const routes: Routes = [
  {
    path: '',
    component: DurervPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DurervPageRoutingModule {}
