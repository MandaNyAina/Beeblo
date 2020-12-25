import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierComponent } from './panier.component';
import { PanierRoutes } from './panier.routing';

@NgModule({
  imports: [
    CommonModule,
    PanierRoutes
  ],
  declarations: [PanierComponent]
})
export class PanierModule { }
