import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyMathPageRoutingModule } from './py-math-routing.module';

import { PyMathPage } from './py-math.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyMathPageRoutingModule
  ],
  declarations: [PyMathPage]
})
export class PyMathPageModule {}
