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
  {
    path: 'py-comment',
    loadChildren: () => import('./py-comment/py-comment.module').then( m => m.PyCommentPageModule)
  },
  {
    path: 'py-string',
    loadChildren: () => import('./py-string/py-string.module').then( m => m.PyStringPageModule)
  },
  {
    path: 'py-boolean',
    loadChildren: () => import('./py-boolean/py-boolean.module').then( m => m.PyBooleanPageModule)
  },
  {
    path: 'py-operator',
    loadChildren: () => import('./py-operator/py-operator.module').then( m => m.PyOperatorPageModule)
  },
  {
    path: 'py-list',
    loadChildren: () => import('./py-list/py-list.module').then( m => m.PyListPageModule)
  },
  {
    path: 'py-tuple',
    loadChildren: () => import('./py-tuple/py-tuple.module').then( m => m.PyTuplePageModule)
  },
  {
    path: 'py-set',
    loadChildren: () => import('./py-set/py-set.module').then( m => m.PySetPageModule)
  },
  {
    path: 'py-dict',
    loadChildren: () => import('./py-dict/py-dict.module').then( m => m.PyDictPageModule)
  },
  {
    path: 'py-if',
    loadChildren: () => import('./py-if/py-if.module').then( m => m.PyIfPageModule)
  },
  {
    path: 'py-while',
    loadChildren: () => import('./py-while/py-while.module').then( m => m.PyWhilePageModule)
  },
  {
    path: 'py-for',
    loadChildren: () => import('./py-for/py-for.module').then( m => m.PyForPageModule)
  },
  {
    path: 'py-func',
    loadChildren: () => import('./py-func/py-func.module').then( m => m.PyFuncPageModule)
  },
  {
    path: 'py-array',
    loadChildren: () => import('./py-array/py-array.module').then( m => m.PyArrayPageModule)
  },
  {
    path: 'py-clsobj',
    loadChildren: () => import('./py-clsobj/py-clsobj.module').then( m => m.PyClsobjPageModule)
  },
  {
    path: 'py-inheritance',
    loadChildren: () => import('./py-inheritance/py-inheritance.module').then( m => m.PyInheritancePageModule)
  },
  {
    path: 'py-iterator',
    loadChildren: () => import('./py-iterator/py-iterator.module').then( m => m.PyIteratorPageModule)
  },
  {
    path: 'py-scope',
    loadChildren: () => import('./py-scope/py-scope.module').then( m => m.PyScopePageModule)
  },
  {
    path: 'py-module',
    loadChildren: () => import('./py-module/py-module.module').then( m => m.PyModulePageModule)
  },
  {
    path: 'py-math',
    loadChildren: () => import('./py-math/py-math.module').then( m => m.PyMathPageModule)
  },
  {
    path: 'py-ui',
    loadChildren: () => import('./py-ui/py-ui.module').then( m => m.PyUiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
