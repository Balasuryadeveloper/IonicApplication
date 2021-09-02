import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyInheritancePage } from './py-inheritance.page';

const routes: Routes = [
  {
    path: '',
    component: PyInheritancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyInheritancePageRoutingModule {}
