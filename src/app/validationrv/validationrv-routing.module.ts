import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationrvPage } from './validationrv.page';

const routes: Routes = [
  {
    path: '',
    component: ValidationrvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationrvPageRoutingModule {}
