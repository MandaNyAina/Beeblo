import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { P403Component } from './views/error/403.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '403',
    component: P403Component,
    data: {
      title: 'Page 403'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Accueil'
    },
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'acheteur',
        loadChildren: () => import('./views/acheteur/acheteur.module').then(m => m.AcheteurModule)
      },
      {
        path: 'produit',
        loadChildren: () => import('./views/produit/produit.module').then(m => m.ProduitModule)
      },
      {
        path: 'promotion',
        loadChildren: () => import('./views/promotion/promotion.module').then(m => m.PromotionModule)
      },
      {
        path: 'categorie',
        loadChildren: () => import('./views/categorie/categorie.module').then(m => m.CategorieModule)
      },
      {
        path: 'etat-produit',
        loadChildren: () => import('./views/etat/etat.module').then(m => m.EtatModule)
      },
      {
        path: 'panier',
        loadChildren: () => import('./views/panier/panier.module').then(m => m.PanierModule)
      },
      {
        path: 'commande',
        loadChildren: () => import('./views/commande/commande.module').then(m => m.CommandeModule)
      },
      {
        path: 'livraison',
        loadChildren: () => import('./views/livraison/livraison.module').then(m => m.LivraisonModule)
      },
      {
        path: 'transaction',
        loadChildren: () => import('./views/transaction/transaction.module').then(m => m.TransactionModule)
      },
      {
        path: 'beeblo-aide',
        loadChildren: () => import('./views/parametrage/beeblo-faq-aide/beeblo-faq-aide.module').then(m => m.BeebloFaqAideModule)
      },
      {
        path: 'beeblo-config',
        loadChildren: () => import('./views/parametrage/beeblo-config/beeblo-config.module').then(m => m.BeebloConfigModule)
      },
      {
        path: 'beeblo-info',
        loadChildren: () => import('./views/parametrage/beeblo-info/beeblo-info.module').then(m => m.BeebloInfoModule)
      },
      {
        path: 'beeblo-email',
        loadChildren: () => import('./views/parametrage/beeblo-email/beeblo-email.module').then(m => m.BeebloEmailModule)
      },
      {
        path: 'beeblo-reseau',
        loadChildren: () => import('./views/parametrage/beeblo-reseau/beeblo-reseau.module').then(m => m.BeebloReseauModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./views/notification/notification.module').then(m => m.NotificationModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'parametrage-compte',
        loadChildren: () => import('./views/parametrage-compte/parametrage-compte.module').then(m => m.ParametrageCompteModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
