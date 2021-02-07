import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieComponent } from './categorie.component';
import { CategorieRoutes } from './categorie.routing';
import { CustomModule } from '../../modules/custom/custom.module';

@NgModule({
  imports: [
    CommonModule,
    CategorieRoutes,
    CustomModule
  ],
  declarations: [CategorieComponent]
})
export class CategorieModule { }
