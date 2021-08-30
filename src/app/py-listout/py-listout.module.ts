import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyListoutPageRoutingModule } from './py-listout-routing.module';

import { PyListoutPage } from './py-listout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyListoutPageRoutingModule
  ],
  declarations: [PyListoutPage]
})
export class PyListoutPageModule {}
