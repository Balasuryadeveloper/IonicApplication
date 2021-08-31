import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyListPageRoutingModule } from './py-list-routing.module';

import { PyListPage } from './py-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyListPageRoutingModule
  ],
  declarations: [PyListPage]
})
export class PyListPageModule {}
