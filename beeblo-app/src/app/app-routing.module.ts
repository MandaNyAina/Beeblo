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
import { CodePromotionComponent } from './views/code-promotion/code-promotion.component';
import { CreationCompteComponent } from './views/creation-compte/creation-compte.component';
import { FaqNewComponent } from './views/faq-new/faq-new.component';
import { NosDistributeurComponent } from './views/nos-distributeur/nos-distributeur.component';


const routes: Routes = [
  { path: "auth",  component: AuthComponent},
  { path: "creation-compte",  component: CreationCompteComponent},
  { path: "", redirectTo:"homepage", pathMatch: "full" },
  // { path: "homepage", component: HomepageComponent },
  { path: "homepage", component: HomeComponent },
  { path: "produit/:id", component: ProduitComponent },
  { path: "best-seller", component: CollectionComponent },
  { path: "collection", component: CollectionComponent },
  { path: "categorie", component: CollectionComponent },
  { path: "code-promo", component: CodePromotionComponent },
  { path: "panier", component: PanierComponent },
  { path: "nos-distributeur", component: NosDistributeurComponent },
  { path: "promotion", component: CollectionComponent },
  { path: "terme-condition", component: ConditionComponent },
  { path: "mention-legale", component: ConditionComponent },
  { path: "apropos", component: AproposComponent },
  { path: "condition", component: ConditionComponent },
  // { path: "faq", component: FaqComponent },
  { path: "faq", component: FaqNewComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
