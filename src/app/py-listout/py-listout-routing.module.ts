import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyListoutPage } from './py-listout.page';

const routes: Routes = [
  {
    path: '',
    component: PyListoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyListoutPageRoutingModule {}
