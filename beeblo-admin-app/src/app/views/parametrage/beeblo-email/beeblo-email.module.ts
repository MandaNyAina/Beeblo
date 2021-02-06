import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeebloEmailComponent } from './beeblo-email.component';
import { BeebloEmailRoutes } from './beeblo-email.routing';
import { CustomModule } from '../../../modules/custom/custom.module';

@NgModule({
  imports: [
    CommonModule,
    BeebloEmailRoutes,
    CustomModule
  ],
  declarations: [BeebloEmailComponent]
})
export class BeebloEmailModule { }
