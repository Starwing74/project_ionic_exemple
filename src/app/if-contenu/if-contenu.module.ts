import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IfContenuPageRoutingModule } from './if-contenu-routing.module';

import { IfContenuPage } from './if-contenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IfContenuPageRoutingModule
  ],
  declarations: [IfContenuPage]
})
export class IfContenuPageModule {}
