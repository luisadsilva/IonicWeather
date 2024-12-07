import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'tabc',
    loadChildren: () => import('./tabc/tabc.module').then( m => m.TabcPageModule)
  },
  {
    path: 'tabl',
    loadChildren: () => import('./tabl/tabl.module').then( m => m.TablPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
}) ///
export class AppRoutingModule {}
