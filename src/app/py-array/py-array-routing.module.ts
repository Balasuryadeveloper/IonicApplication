import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyArrayPage } from './py-array.page';

const routes: Routes = [
  {
    path: '',
    component: PyArrayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyArrayPageRoutingModule {}
