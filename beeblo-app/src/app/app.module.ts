import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './FO/footer/footer.component';
import { HeaderComponent } from './FO/header/header.component';
import { HomepageComponent } from './FO/homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProduitComponent } from './FO/produit/produit.component';
import { CollectionComponent } from './FO/collection/collection.component';
import { PanierComponent } from './FO/panier/panier.component';
import { AuthComponent } from './FO/auth/auth.component';
import { SidebarModule } from 'primeng/sidebar';
import {CarouselModule} from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TooltipModule} from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { AproposComponent } from './FO/apropos/apropos.component';
import { ConditionComponent } from './FO/condition/condition.component';
import { FaqComponent } from './FO/faq/faq.component';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    NotFoundComponent,
    ProduitComponent,
    CollectionComponent,
    PanierComponent,
    AuthComponent,
    AproposComponent,
    ConditionComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    BreadcrumbModule,
    TooltipModule,
    AutoCompleteModule,
    ToastModule,
    InputTextModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
