import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyModulePageRoutingModule } from './py-module-routing.module';

import { PyModulePage } from './py-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyModulePageRoutingModule
  ],
  declarations: [PyModulePage]
})
export class PyModulePageModule {}
