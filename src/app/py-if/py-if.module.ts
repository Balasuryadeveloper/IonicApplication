import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyIfPageRoutingModule } from './py-if-routing.module';

import { PyIfPage } from './py-if.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyIfPageRoutingModule
  ],
  declarations: [PyIfPage]
})
export class PyIfPageModule {}
