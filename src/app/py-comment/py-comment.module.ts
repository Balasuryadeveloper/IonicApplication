import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyCommentPageRoutingModule } from './py-comment-routing.module';

import { PyCommentPage } from './py-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyCommentPageRoutingModule
  ],
  declarations: [PyCommentPage]
})
export class PyCommentPageModule {}
