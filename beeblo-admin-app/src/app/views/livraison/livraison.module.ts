import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivraisonRoutes } from './livraison.routing';
import { ListeLivraisonComponent } from './liste-livraison/liste-livraison.component';
import { LivreurComponent } from './livreur/livreur.component';

@NgModule({
  imports: [
    CommonModule,
    LivraisonRoutes
  ],
  declarations: [ListeLivraisonComponent, LivreurComponent]
})
export class LivraisonModule { }
