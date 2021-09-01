import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyDictPageRoutingModule } from './py-dict-routing.module';

import { PyDictPage } from './py-dict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyDictPageRoutingModule
  ],
  declarations: [PyDictPage]
})
export class PyDictPageModule {}
