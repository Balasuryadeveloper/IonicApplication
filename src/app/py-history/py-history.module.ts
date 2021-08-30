import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyHistoryPageRoutingModule } from './py-history-routing.module';

import { PyHistoryPage } from './py-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyHistoryPageRoutingModule
  ],
  declarations: [PyHistoryPage]
})
export class PyHistoryPageModule {}
