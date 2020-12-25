import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { TailleComponent } from './taille/taille.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Etat produit'
    },
    children: [
      {
        path: '',
        redirectTo: 'color'
      },
      {
        path: 'color',
        component: ColorComponent,
        data: {
          title: 'Couleur'
        }
      },
      {
        path: 'taille',
        component: TailleComponent,
        data: {
          title: 'Taille'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtatRoutes {}
