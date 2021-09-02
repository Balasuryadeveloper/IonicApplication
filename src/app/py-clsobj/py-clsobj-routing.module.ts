import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyClsobjPage } from './py-clsobj.page';

const routes: Routes = [
  {
    path: '',
    component: PyClsobjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyClsobjPageRoutingModule {}
