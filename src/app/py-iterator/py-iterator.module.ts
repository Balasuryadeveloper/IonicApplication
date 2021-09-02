import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyIteratorPageRoutingModule } from './py-iterator-routing.module';

import { PyIteratorPage } from './py-iterator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyIteratorPageRoutingModule
  ],
  declarations: [PyIteratorPage]
})
export class PyIteratorPageModule {}
