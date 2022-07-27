import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelloworldPageRoutingModule } from './helloworld-routing.module';

import { HelloworldPage } from './helloworld.page';

import { LPCustomComponent } from '../lpcustom/lpcustom.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelloworldPageRoutingModule
  ],
  declarations: [HelloworldPage, LPCustomComponent],
  exports: [LPCustomComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class HelloworldPageModule {}
