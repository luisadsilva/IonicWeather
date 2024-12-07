import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablPage } from './tabl.page';

const routes: Routes = [
  {
    path: '',
    component: TablPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablPageRoutingModule {}
