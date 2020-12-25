import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeebloEmailComponent } from './beeblo-email.component';
import { BeebloEmailRoutes } from './beeblo-email.routing';

@NgModule({
  imports: [
    CommonModule,
    BeebloEmailRoutes
  ],
  declarations: [BeebloEmailComponent]
})
export class BeebloEmailModule { }
