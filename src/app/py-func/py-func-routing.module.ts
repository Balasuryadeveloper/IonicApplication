import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyFuncPage } from './py-func.page';

const routes: Routes = [
  {
    path: '',
    component: PyFuncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyFuncPageRoutingModule {}
