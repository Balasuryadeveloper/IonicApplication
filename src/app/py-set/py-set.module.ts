import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PySetPageRoutingModule } from './py-set-routing.module';

import { PySetPage } from './py-set.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PySetPageRoutingModule
  ],
  declarations: [PySetPage]
})
export class PySetPageModule {}
