import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeebloConfigMenuComponent } from './beeblo-config-menu/beeblo-config-menu.component';
import { BeebloConfigFiltreComponent } from './beeblo-config-filtre/beeblo-config-filtre.component';
import { BeebloConfigRoutes } from './beeblo-config.routing';

@NgModule({
  imports: [
    CommonModule,
    BeebloConfigRoutes
  ],
  declarations: [BeebloConfigMenuComponent, BeebloConfigFiltreComponent]
})
export class BeebloConfigModule { }
