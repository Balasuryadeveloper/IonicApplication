import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyDatatypePageRoutingModule } from './py-datatype-routing.module';

import { PyDatatypePage } from './py-datatype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyDatatypePageRoutingModule
  ],
  declarations: [PyDatatypePage]
})
export class PyDatatypePageModule {}
