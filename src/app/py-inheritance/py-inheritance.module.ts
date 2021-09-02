import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyInheritancePageRoutingModule } from './py-inheritance-routing.module';

import { PyInheritancePage } from './py-inheritance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyInheritancePageRoutingModule
  ],
  declarations: [PyInheritancePage]
})
export class PyInheritancePageModule {}
