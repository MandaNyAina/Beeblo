import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeebloReseauComponent } from './beeblo-reseau.component';
import { BeebloReseauRoutes } from './beeblo-reseau.routing';

@NgModule({
  imports: [
    CommonModule,
    BeebloReseauRoutes
  ],
  declarations: [BeebloReseauComponent]
})
export class BeebloReseauModule { }
