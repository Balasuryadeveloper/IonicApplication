import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyWhilePage } from './py-while.page';

const routes: Routes = [
  {
    path: '',
    component: PyWhilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyWhilePageRoutingModule {}
