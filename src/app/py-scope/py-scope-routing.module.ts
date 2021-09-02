import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyScopePage } from './py-scope.page';

const routes: Routes = [
  {
    path: '',
    component: PyScopePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyScopePageRoutingModule {}
