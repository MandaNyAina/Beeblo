import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametrageCompteComponent } from './parametrage-compte.component';
import { ParametrageCompteRoutes } from './parametrage-compte.routing';

@NgModule({
  imports: [
    CommonModule,
    ParametrageCompteRoutes
  ],
  declarations: [ParametrageCompteComponent]
})
export class ParametrageCompteModule { }
