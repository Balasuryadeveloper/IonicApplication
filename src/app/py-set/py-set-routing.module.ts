import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PySetPage } from './py-set.page';

const routes: Routes = [
  {
    path: '',
    component: PySetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PySetPageRoutingModule {}
