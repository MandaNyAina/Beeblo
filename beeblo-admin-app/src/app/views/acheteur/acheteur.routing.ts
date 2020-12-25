import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcheteurComponent } from './acheteur.component';

const routes: Routes = [
  {
    path: '',
    component: AcheteurComponent,
    data: {
      title: 'Acheteur'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcheteurRoutingModule {}
