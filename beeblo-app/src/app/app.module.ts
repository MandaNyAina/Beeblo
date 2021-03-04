import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularResizedEventModule } from 'angular-resize-event';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProduitComponent } from './views/produit/produit.component';
import { CollectionComponent } from './views/collection/collection.component';
import { PanierComponent } from './views/panier/panier.component';
import { AuthComponent } from './views/auth/auth.component';
import { SidebarModule } from 'primeng/sidebar';
import {CarouselModule} from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TooltipModule} from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { AproposComponent } from './views/apropos/apropos.component';
import { ConditionComponent } from './views/condition/condition.component';
import { FaqComponent } from './views/faq/faq.component';
import {InputTextModule} from 'primeng/inputtext';
import { HomeComponent } from './views/home/home.component';
import { PaginationComponent } from './views/pagination/pagination.component';
import { CategorieComponent } from './views/categorie/categorie.component';
import { CodePromotionComponent } from './views/code-promotion/code-promotion.component';
import { CreationCompteComponent } from './views/creation-compte/creation-compte.component';
import { FaqNewComponent } from './views/faq-new/faq-new.component';
import { NosDistributeurComponent } from './views/nos-distributeur/nos-distributeur.component';
import { FooterFixedComponent } from './views/footer-fixed/footer-fixed.component';

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
    FaqComponent,
    HomeComponent,
    PaginationComponent,
    CategorieComponent,
    CodePromotionComponent,
    CreationCompteComponent,
    NosDistributeurComponent,
    FooterFixedComponent,
    FaqNewComponent
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
    InputTextModule,
    AngularResizedEventModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
