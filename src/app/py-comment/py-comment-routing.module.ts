import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PyCommentPage } from './py-comment.page';

const routes: Routes = [
  {
    path: '',
    component: PyCommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyCommentPageRoutingModule {}
