import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyFuncPageRoutingModule } from './py-func-routing.module';

import { PyFuncPage } from './py-func.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyFuncPageRoutingModule
  ],
  declarations: [PyFuncPage]
})
export class PyFuncPageModule {}
