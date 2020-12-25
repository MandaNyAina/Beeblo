import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeComponent } from './commande.component';
import { CommandeRoutes } from './commande.routing';

@NgModule({
  imports: [
    CommonModule,
    CommandeRoutes
  ],
  declarations: [CommandeComponent]
})
export class CommandeModule { }
