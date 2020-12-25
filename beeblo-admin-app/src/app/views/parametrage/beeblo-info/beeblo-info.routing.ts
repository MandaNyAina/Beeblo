import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeebloInfoComponent } from './beeblo-info.component';

const routes: Routes = [
  {
    path: '',
    component: BeebloInfoComponent,
    data: {
      title: 'Site information configuration'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeebloInfoRoutes {}
