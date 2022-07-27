import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayJSONPageRoutingModule } from './display-json-routing.module';

import { DisplayJSONPage } from './display-json.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayJSONPageRoutingModule
  ],
  declarations: [DisplayJSONPage]
})
export class DisplayJSONPageModule {}
