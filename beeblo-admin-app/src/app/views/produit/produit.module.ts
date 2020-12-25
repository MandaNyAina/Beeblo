import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit.component';
import { ProduitRoutes } from './produit.routing';

@NgModule({
  imports: [
    CommonModule,
    ProduitRoutes
  ],
  declarations: [ProduitComponent]
})
export class ProduitModule { }
