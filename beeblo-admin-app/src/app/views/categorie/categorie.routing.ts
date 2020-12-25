import { Routes, RouterModule } from '@angular/router';
import { CategorieComponent } from './categorie.component';

const routes: Routes = [
  {
    path: '',
    component: CategorieComponent,
    data: {
      title: 'Produits'
    }
  }
];

export const CategorieRoutes = RouterModule.forChild(routes);
