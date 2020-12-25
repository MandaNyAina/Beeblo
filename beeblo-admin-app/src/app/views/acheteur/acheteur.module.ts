import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcheteurComponent } from './acheteur.component';
import { AcheteurRoutingModule } from './acheteur.routing';

@NgModule({
  imports: [
    CommonModule,
    AcheteurRoutingModule
  ],
  declarations: [AcheteurComponent]
})
export class AcheteurModule { }
