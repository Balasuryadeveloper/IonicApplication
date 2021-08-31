import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyBooleanPage } from './py-boolean.page';

const routes: Routes = [
  {
    path: '',
    component: PyBooleanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyBooleanPageRoutingModule {}
