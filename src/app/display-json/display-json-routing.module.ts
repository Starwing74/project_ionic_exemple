import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayJSONPage } from './display-json.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayJSONPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayJSONPageRoutingModule {}
