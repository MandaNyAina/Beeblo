import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeebloEmailComponent } from './beeblo-email.component';

const routes: Routes = [
  {
    path: '',
    component: BeebloEmailComponent,
    data: {
      title: 'Email configuration'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeebloEmailRoutes {}
