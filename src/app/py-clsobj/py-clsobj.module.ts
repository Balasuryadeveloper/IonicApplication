import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyClsobjPageRoutingModule } from './py-clsobj-routing.module';

import { PyClsobjPage } from './py-clsobj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyClsobjPageRoutingModule
  ],
  declarations: [PyClsobjPage]
})
export class PyClsobjPageModule {}
