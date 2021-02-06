import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit.component';
import { ProduitRoutes } from './produit.routing';
import { CustomModule } from '../../modules/custom/custom.module';

@NgModule({
  imports: [
    CommonModule,
    ProduitRoutes,
    CustomModule
  ],
  declarations: [ProduitComponent]
})
export class ProduitModule { }
