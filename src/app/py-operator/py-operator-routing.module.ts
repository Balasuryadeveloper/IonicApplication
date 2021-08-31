import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyOperatorPage } from './py-operator.page';

const routes: Routes = [
  {
    path: '',
    component: PyOperatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyOperatorPageRoutingModule {}
