import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyOperatorPageRoutingModule } from './py-operator-routing.module';

import { PyOperatorPage } from './py-operator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyOperatorPageRoutingModule
  ],
  declarations: [PyOperatorPage]
})
export class PyOperatorPageModule {}
