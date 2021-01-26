import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeebloInfoComponent } from './beeblo-info.component';
import { BeebloInfoRoutes } from './beeblo-info.routing';
import { CustomModule } from '../../../modules/custom/custom.module';
import { SubmitComponent } from '../../../modules/submit/submit.component';

@NgModule({
  imports: [
    CommonModule,
    BeebloInfoRoutes,
    CustomModule
  ],
  declarations: [BeebloInfoComponent, SubmitComponent]
})
export class BeebloInfoModule { }
