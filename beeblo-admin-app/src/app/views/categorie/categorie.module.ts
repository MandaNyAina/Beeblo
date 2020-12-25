import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieComponent } from './categorie.component';
import { CategorieRoutes } from './categorie.routing';

@NgModule({
  imports: [
    CommonModule,
    CategorieRoutes
  ],
  declarations: [CategorieComponent]
})
export class CategorieModule { }
