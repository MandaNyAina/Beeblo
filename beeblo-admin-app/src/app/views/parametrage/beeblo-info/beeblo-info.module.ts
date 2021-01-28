import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeebloInfoComponent } from './beeblo-info.component';
import { BeebloInfoRoutes } from './beeblo-info.routing';
import { CustomModule } from '../../../modules/custom/custom.module';
import { CrudTableComponent } from '../../../modules/crud-table/crud-table.component';

@NgModule({
  imports: [
    CommonModule,
    BeebloInfoRoutes,
    CustomModule
  ],
  declarations: [BeebloInfoComponent, CrudTableComponent]
})
export class BeebloInfoModule { }
