import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivraisonComponent } from './livraison.component';
import { LivraisonRoutes } from './livraison.routing';

@NgModule({
  imports: [
    CommonModule,
    LivraisonRoutes
  ],
  declarations: [LivraisonComponent]
})
export class LivraisonModule { }
