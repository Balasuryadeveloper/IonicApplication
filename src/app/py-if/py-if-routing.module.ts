import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyIfPage } from './py-if.page';

const routes: Routes = [
  {
    path: '',
    component: PyIfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyIfPageRoutingModule {}
