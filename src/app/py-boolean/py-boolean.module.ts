import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyBooleanPageRoutingModule } from './py-boolean-routing.module';

import { PyBooleanPage } from './py-boolean.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyBooleanPageRoutingModule
  ],
  declarations: [PyBooleanPage]
})
export class PyBooleanPageModule {}
