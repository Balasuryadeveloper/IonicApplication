import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyTuplePageRoutingModule } from './py-tuple-routing.module';

import { PyTuplePage } from './py-tuple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyTuplePageRoutingModule
  ],
  declarations: [PyTuplePage]
})
export class PyTuplePageModule {}
