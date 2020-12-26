import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultationPromoComponent } from './consultation-promo/consultation-promo.component';
import { ListePromoComponent } from './liste-promo/liste-promo.component';
import { ProduitPromoComponent } from './produit-promo/produit-promo.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Promotions'
    },
    children: [
      {
        path: '',
        redirectTo: 'liste-promo'
      },
      {
        path: 'liste-promo',
        component: ListePromoComponent,
        data: {
          title: 'Listes des promotions'
        }
      },
      {
        path: 'consultation',
        component: ConsultationPromoComponent,
        data: {
          title: 'Consultation des promotions'
        }
      },
      {
        path: 'produit',
        component: ProduitPromoComponent,
        data: {
          title: 'Consultation des promotions'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutes {}
