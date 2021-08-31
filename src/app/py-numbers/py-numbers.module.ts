import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyNumbersPageRoutingModule } from './py-numbers-routing.module';

import { PyNumbersPage } from './py-numbers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyNumbersPageRoutingModule
  ],
  declarations: [PyNumbersPage]
})
export class PyNumbersPageModule {}
