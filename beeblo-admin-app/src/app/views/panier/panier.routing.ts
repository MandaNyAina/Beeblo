import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanierComponent } from './panier.component';

const routes: Routes = [
  {
    path: '',
    component: PanierComponent,
    data: {
      title: 'Panier'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanierRoutes {}
