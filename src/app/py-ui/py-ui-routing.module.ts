import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyUiPage } from './py-ui.page';

const routes: Routes = [
  {
    path: '',
    component: PyUiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyUiPageRoutingModule {}
