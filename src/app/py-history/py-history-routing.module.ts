import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyHistoryPage } from './py-history.page';

const routes: Routes = [
  {
    path: '',
    component: PyHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyHistoryPageRoutingModule {}
