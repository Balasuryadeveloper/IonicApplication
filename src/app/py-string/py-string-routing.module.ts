import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyStringPage } from './py-string.page';

const routes: Routes = [
  {
    path: '',
    component: PyStringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyStringPageRoutingModule {}
