import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PySyntaxPageRoutingModule } from './py-syntax-routing.module';

import { PySyntaxPage } from './py-syntax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PySyntaxPageRoutingModule
  ],
  declarations: [PySyntaxPage]
})
export class PySyntaxPageModule {}
