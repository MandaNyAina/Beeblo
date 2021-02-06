import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeebloConfigMenuComponent } from './beeblo-config-menu/beeblo-config-menu.component';
import { BeebloConfigFiltreComponent } from './beeblo-config-filtre/beeblo-config-filtre.component';
import { BeebloConfigRoutes } from './beeblo-config.routing';
import { CustomModule } from '../../../modules/custom/custom.module';

@NgModule({
  imports: [
    CommonModule,
    BeebloConfigRoutes,
    CustomModule
  ],
  declarations: [BeebloConfigMenuComponent, BeebloConfigFiltreComponent]
})
export class BeebloConfigModule { }
