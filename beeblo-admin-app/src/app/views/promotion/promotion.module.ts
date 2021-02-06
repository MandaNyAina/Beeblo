import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionRoutes } from './promotion.routing';
import { ListePromoComponent } from './liste-promo/liste-promo.component';
import { ConsultationPromoComponent } from './consultation-promo/consultation-promo.component';
import { ProduitPromoComponent } from './produit-promo/produit-promo.component';
import { CustomModule } from '../../modules/custom/custom.module';

@NgModule({
  imports: [
    CommonModule,
    PromotionRoutes,
    CustomModule
  ],
  declarations: [ListePromoComponent, ConsultationPromoComponent, ProduitPromoComponent]
})
export class PromotionModule { }
