import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametrageCompteComponent } from './parametrage-compte.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrageCompteComponent,
    data: {
      title: 'Paramètrage'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrageCompteRoutes {}
