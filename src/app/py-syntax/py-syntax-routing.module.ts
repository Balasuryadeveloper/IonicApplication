import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PySyntaxPage } from './py-syntax.page';

const routes: Routes = [
  {
    path: '',
    component: PySyntaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PySyntaxPageRoutingModule {}
