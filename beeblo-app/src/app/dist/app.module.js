"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var angular_resize_event_1 = require("angular-resize-event");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var footer_component_1 = require("./views/footer/footer.component");
var header_component_1 = require("./views/header/header.component");
var homepage_component_1 = require("./views/homepage/homepage.component");
var not_found_component_1 = require("./not-found/not-found.component");
var produit_component_1 = require("./views/produit/produit.component");
var collection_component_1 = require("./views/collection/collection.component");
var panier_component_1 = require("./views/panier/panier.component");
var auth_component_1 = require("./views/auth/auth.component");
var sidebar_1 = require("primeng/sidebar");
var carousel_1 = require("primeng/carousel");
var animations_1 = require("@angular/platform-browser/animations");
var breadcrumb_1 = require("primeng/breadcrumb");
var tooltip_1 = require("primeng/tooltip");
var forms_1 = require("@angular/forms");
var toast_1 = require("primeng/toast");
var api_1 = require("primeng/api");
var autocomplete_1 = require("primeng/autocomplete");
var apropos_component_1 = require("./views/apropos/apropos.component");
var condition_component_1 = require("./views/condition/condition.component");
var faq_component_1 = require("./views/faq/faq.component");
var inputtext_1 = require("primeng/inputtext");
var home_component_1 = require("./views/home/home.component");
var pagination_component_1 = require("./views/pagination/pagination.component");
var terme_condition_component_1 = require("./views/terme-condition/terme-condition.component");
var mention_legale_component_1 = require("./views/mention-legale/mention-legale.component");
var categorie_component_1 = require("./views/categorie/categorie.component");
var promotion_component_1 = require("./views/promotion/promotion.component");
var best_seller_component_1 = require("./views/best-seller/best-seller.component");
var code_promotion_component_1 = require("./views/code-promotion/code-promotion.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                homepage_component_1.HomepageComponent,
                not_found_component_1.NotFoundComponent,
                produit_component_1.ProduitComponent,
                collection_component_1.CollectionComponent,
                panier_component_1.PanierComponent,
                auth_component_1.AuthComponent,
                apropos_component_1.AproposComponent,
                condition_component_1.ConditionComponent,
                faq_component_1.FaqComponent,
                home_component_1.HomeComponent,
                pagination_component_1.PaginationComponent,
                terme_condition_component_1.TermeConditionComponent,
                mention_legale_component_1.MentionLegaleComponent,
                categorie_component_1.CategorieComponent,
                promotion_component_1.PromotionComponent,
                best_seller_component_1.BestSellerComponent,
                code_promotion_component_1.CodePromotionComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                sidebar_1.SidebarModule,
                carousel_1.CarouselModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                breadcrumb_1.BreadcrumbModule,
                tooltip_1.TooltipModule,
                autocomplete_1.AutoCompleteModule,
                toast_1.ToastModule,
                inputtext_1.InputTextModule,
                angular_resize_event_1.AngularResizedEventModule
            ],
            providers: [api_1.MessageService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
