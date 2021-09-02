import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyIteratorPage } from './py-iterator.page';

const routes: Routes = [
  {
    path: '',
    component: PyIteratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyIteratorPageRoutingModule {}
