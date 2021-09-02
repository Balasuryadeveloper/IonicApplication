import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyForPageRoutingModule } from './py-for-routing.module';

import { PyForPage } from './py-for.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyForPageRoutingModule
  ],
  declarations: [PyForPage]
})
export class PyForPageModule {}
