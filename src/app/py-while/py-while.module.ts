import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyWhilePageRoutingModule } from './py-while-routing.module';

import { PyWhilePage } from './py-while.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyWhilePageRoutingModule
  ],
  declarations: [PyWhilePage]
})
export class PyWhilePageModule {}
