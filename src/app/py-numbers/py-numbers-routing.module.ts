import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyNumbersPage } from './py-numbers.page';

const routes: Routes = [
  {
    path: '',
    component: PyNumbersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyNumbersPageRoutingModule {}
