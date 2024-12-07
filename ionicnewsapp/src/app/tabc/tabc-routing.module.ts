import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabcPage } from './tabc.page';

const routes: Routes = [
  {
    path: '',
    component: TabcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabcPageRoutingModule {}
