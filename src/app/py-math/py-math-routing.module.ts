import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyMathPage } from './py-math.page';

const routes: Routes = [
  {
    path: '',
    component: PyMathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyMathPageRoutingModule {}
