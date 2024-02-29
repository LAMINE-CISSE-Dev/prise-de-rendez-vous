import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModervPage } from './moderv.page';

const routes: Routes = [
  {
    path: '',
    component: ModervPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModervPageRoutingModule {}
