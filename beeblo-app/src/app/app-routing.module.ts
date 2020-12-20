import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './FO/auth/auth.component';
import { CollectionComponent } from './FO/collection/collection.component';
import { HomepageComponent } from './FO/homepage/homepage.component';
import { PanierComponent } from './FO/panier/panier.component';
import { ProduitComponent } from './FO/produit/produit.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: "auth",  component: AuthComponent},
  { path: "", redirectTo:"homepage", pathMatch: "full" },
  { path: "homepage", component: HomepageComponent },
  { path: "produit/:id", component: ProduitComponent },
  { path: "collection", component: CollectionComponent },
  { path: "panier", component: PanierComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
