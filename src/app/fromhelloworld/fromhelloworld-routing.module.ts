import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FromhelloworldPage } from './fromhelloworld.page';

const routes: Routes = [
  {
    path: '',
    component: FromhelloworldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FromhelloworldPageRoutingModule {}
