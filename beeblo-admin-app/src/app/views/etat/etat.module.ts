import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtatRoutes } from './etat.routing';
import { ColorComponent } from './color/color.component';
import { TailleComponent } from './taille/taille.component';

@NgModule({
  imports: [
    CommonModule,
    EtatRoutes
  ],
  declarations: [ColorComponent, TailleComponent]
})
export class EtatModule { }
