import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyUiPageRoutingModule } from './py-ui-routing.module';

import { PyUiPage } from './py-ui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyUiPageRoutingModule
  ],
  declarations: [PyUiPage]
})
export class PyUiPageModule {}
