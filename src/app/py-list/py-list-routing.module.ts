import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyListPage } from './py-list.page';

const routes: Routes = [
  {
    path: '',
    component: PyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyListPageRoutingModule {}
