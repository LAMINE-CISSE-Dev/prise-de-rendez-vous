import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'moderv',
    loadChildren: () => import('./moderv/moderv.module').then( m => m.ModervPageModule)
  },
  {
    path: 'durerv',
    loadChildren: () => import('./durerv/durerv.module').then( m => m.DurervPageModule)
  },
  {
    path: 'payementrv',
    loadChildren: () => import('./payementrv/payementrv.module').then( m => m.PayementrvPageModule)
  },
  {
    path: 'resumerv',
    loadChildren: () => import('./resumerv/resumerv.module').then( m => m.ResumervPageModule)
  },
  {
    path: 'validationrv',
    loadChildren: () => import('./validationrv/validationrv.module').then( m => m.ValidationrvPageModule)
  },
  {
    path: 'communication',
    loadChildren: () => import('./communication/communication.module').then( m => m.CommunicationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
