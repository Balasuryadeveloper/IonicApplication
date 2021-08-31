import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyDatatypePage } from './py-datatype.page';

const routes: Routes = [
  {
    path: '',
    component: PyDatatypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyDatatypePageRoutingModule {}
