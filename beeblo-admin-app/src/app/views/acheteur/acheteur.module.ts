import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcheteurComponent } from './acheteur.component';
import { AcheteurRoutingModule } from './acheteur.routing';
import { CustomModule } from '../../modules/custom/custom.module';

@NgModule({
  imports: [
    CommonModule,
    AcheteurRoutingModule,
    CustomModule
  ],
  declarations: [AcheteurComponent]
})
export class AcheteurModule { }
