import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeebloFaqAideComponent } from './beeblo-faq-aide.component';
import { BeebloFaqAideRoutes } from './beeblo-faq-aide.routing';

@NgModule({
  imports: [
    CommonModule,
    BeebloFaqAideRoutes
  ],
  declarations: [BeebloFaqAideComponent]
})
export class BeebloFaqAideModule { }
