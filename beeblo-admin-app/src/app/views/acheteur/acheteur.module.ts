import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcheteurComponent } from './acheteur.component';
import { AcheteurRoutingModule } from './acheteur.routing';
import { CustomModule } from '../../modules/custom/custom.module';
import { CrudTableComponent } from '../../modules/crud-table/crud-table.component';

@NgModule({
  imports: [
    CommonModule,
    AcheteurRoutingModule,
    CustomModule
  ],
  declarations: [AcheteurComponent, CrudTableComponent]
})
export class AcheteurModule { }
