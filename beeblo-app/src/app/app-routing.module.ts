import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AproposComponent } from './views/apropos/apropos.component';
import { AuthComponent } from './views/auth/auth.component';
import { CollectionComponent } from './views/collection/collection.component';
import { ConditionComponent } from './views/condition/condition.component';
import { FaqComponent } from './views/faq/faq.component';
import { HomeComponent } from './views/home/home.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { PanierComponent } from './views/panier/panier.component';
import { ProduitComponent } from './views/produit/produit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TermeConditionComponent } from './views/terme-condition/terme-condition.component';
import { MentionLegaleComponent } from './views/mention-legale/mention-legale.component';
import { CategorieComponent } from './views/categorie/categorie.component';
import { BestSellerComponent } from './views/best-seller/best-seller.component';
import { PromotionComponent } from './views/promotion/promotion.component';
import { CodePromotionComponent } from './views/code-promotion/code-promotion.component';


const routes: Routes = [
  { path: "auth",  component: AuthComponent},
  { path: "", redirectTo:"homepage", pathMatch: "full" },
  // { path: "homepage", component: HomepageComponent },
  { path: "homepage", component: HomeComponent },
  { path: "produit/:id", component: ProduitComponent },
  { path: "best-seller", component: BestSellerComponent },
  { path: "collection", component: CollectionComponent },
  { path: "categorie", component: CategorieComponent },
  { path: "code-promo", component: CodePromotionComponent },
  { path: "panier", component: PanierComponent },
  { path: "promotion", component: PromotionComponent },
  { path: "terme-condition", component: TermeConditionComponent },
  { path: "mention-legale", component: MentionLegaleComponent },
  { path: "apropos", component: AproposComponent },
  { path: "condition", component: ConditionComponent },
  { path: "faq", component: FaqComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
