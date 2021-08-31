import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyStringPageRoutingModule } from './py-string-routing.module';

import { PyStringPage } from './py-string.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyStringPageRoutingModule
  ],
  declarations: [PyStringPage]
})
export class PyStringPageModule {}
