import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyVarPage } from './py-var.page';

const routes: Routes = [
  {
    path: '',
    component: PyVarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyVarPageRoutingModule {}
