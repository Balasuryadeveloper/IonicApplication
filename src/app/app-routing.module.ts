import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'py-history',
    loadChildren: () => import('./py-history/py-history.module').then( m => m.PyHistoryPageModule)
  },
  {
    path: 'py-listout',
    loadChildren: () => import('./py-listout/py-listout.module').then( m => m.PyListoutPageModule)
  },
  {
    path: 'py-syntax',
    loadChildren: () => import('./py-syntax/py-syntax.module').then( m => m.PySyntaxPageModule)
  },
  {
    path: 'py-var',
    loadChildren: () => import('./py-var/py-var.module').then( m => m.PyVarPageModule)
  },
  {
    path: 'py-datatype',
    loadChildren: () => import('./py-datatype/py-datatype.module').then( m => m.PyDatatypePageModule)
  },
  {
    path: 'py-numbers',
    loadChildren: () => import('./py-numbers/py-numbers.module').then( m => m.PyNumbersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
