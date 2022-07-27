import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IfContenuPage } from './if-contenu.page';

const routes: Routes = [
  {
    path: '',
    component: IfContenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IfContenuPageRoutingModule {}
