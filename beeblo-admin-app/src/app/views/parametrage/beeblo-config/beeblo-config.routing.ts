import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeebloConfigFiltreComponent } from './beeblo-config-filtre/beeblo-config-filtre.component';
import { BeebloConfigMenuComponent } from './beeblo-config-menu/beeblo-config-menu.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Configuration site'
    },
    children: [
      {
        path: '',
        redirectTo: 'menu'
      },
      {
        path: 'menu',
        component: BeebloConfigMenuComponent,
        data: {
          title: 'Menu'
        }
      },
      {
        path: 'filtre',
        component: BeebloConfigFiltreComponent,
        data: {
          title: 'Filtre'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeebloConfigRoutes {}
