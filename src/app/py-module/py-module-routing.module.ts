import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyModulePage } from './py-module.page';

const routes: Routes = [
  {
    path: '',
    component: PyModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyModulePageRoutingModule {}
