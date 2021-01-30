import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeebloInfoComponent } from './beeblo-info.component';
import { BeebloInfoRoutes } from './beeblo-info.routing';

@NgModule({
  imports: [
    CommonModule,
    BeebloInfoRoutes
  ],
  declarations: [BeebloInfoComponent]
})
export class BeebloInfoModule { }
