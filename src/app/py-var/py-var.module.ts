import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyVarPageRoutingModule } from './py-var-routing.module';

import { PyVarPage } from './py-var.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyVarPageRoutingModule
  ],
  declarations: [PyVarPage]
})
export class PyVarPageModule {}
