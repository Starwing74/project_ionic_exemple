import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FromhelloworldPageRoutingModule } from './fromhelloworld-routing.module';

import { FromhelloworldPage } from './fromhelloworld.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FromhelloworldPageRoutingModule
  ],
  declarations: [FromhelloworldPage]
})
export class FromhelloworldPageModule {}
