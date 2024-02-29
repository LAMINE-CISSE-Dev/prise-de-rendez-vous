import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/acceuil',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'acceuil',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/acceuil/acceuil.module').then(m => m.AcceuilPageModule)
          },
        ]
      },

      {
        path: 'calendrier',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/calendrier/calendrier.module').then(m => m.CalendrierPageModule)
          },
        ]
      },

      {
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/chat/chat.module').then(m => m.ChatPageModule),
                
          }
          
        ]
      },

      {
        path: 'profil',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/profil/profil.module').then(m => m.ProfilPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

