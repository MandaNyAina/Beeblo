import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeebloFaqAideComponent } from './beeblo-faq-aide.component';

const routes: Routes = [
  {
    path: '',
    component: BeebloFaqAideComponent,
    data: {
      title: 'Aide & Faq'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeebloFaqAideRoutes {}
