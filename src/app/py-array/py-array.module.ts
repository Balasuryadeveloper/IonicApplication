import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyArrayPageRoutingModule } from './py-array-routing.module';

import { PyArrayPage } from './py-array.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyArrayPageRoutingModule
  ],
  declarations: [PyArrayPage]
})
export class PyArrayPageModule {}
