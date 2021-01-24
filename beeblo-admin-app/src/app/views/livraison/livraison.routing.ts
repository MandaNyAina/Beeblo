import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeLivraisonComponent } from './liste-livraison/liste-livraison.component';
import { LivreurComponent } from './livreur/livreur.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Livraison'
    },
    children: [
      {
        path: '',
        redirectTo: 'liste'
      },
      {
        path: 'livreur',
        component: LivreurComponent,
        data: {
          title: 'Liste'
        }
      },
      {
        path: 'liste',
        component: ListeLivraisonComponent,
        data: {
          title: 'Livreur'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivraisonRoutes {}
