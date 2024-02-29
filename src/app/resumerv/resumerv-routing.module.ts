import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumervPage } from './resumerv.page';

const routes: Routes = [
  {
    path: '',
    component: ResumervPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumervPageRoutingModule {}
