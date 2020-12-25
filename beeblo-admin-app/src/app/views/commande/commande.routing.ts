import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandeComponent } from './commande.component';

const routes: Routes = [
  {
    path: '',
    component: CommandeComponent,
    data: {
      title: 'Commandes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutes {}
