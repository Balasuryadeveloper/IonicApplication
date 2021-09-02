import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PyScopePageRoutingModule } from './py-scope-routing.module';

import { PyScopePage } from './py-scope.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PyScopePageRoutingModule
  ],
  declarations: [PyScopePage]
})
export class PyScopePageModule {}
