import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeebloReseauComponent } from './beeblo-reseau.component';

const routes: Routes = [
  {
    path: '',
    component: BeebloReseauComponent,
    data: {
      title: 'Reseaux sociaux configuration'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeebloReseauRoutes {}
