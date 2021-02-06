import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeebloReseauComponent } from './beeblo-reseau.component';
import { BeebloReseauRoutes } from './beeblo-reseau.routing';
import { CustomModule } from '../../../modules/custom/custom.module';

@NgModule({
  imports: [
    CommonModule,
    BeebloReseauRoutes,
    CustomModule
  ],
  declarations: [BeebloReseauComponent]
})
export class BeebloReseauModule { }
