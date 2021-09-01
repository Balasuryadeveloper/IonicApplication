import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyDictPage } from './py-dict.page';

const routes: Routes = [
  {
    path: '',
    component: PyDictPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyDictPageRoutingModule {}
