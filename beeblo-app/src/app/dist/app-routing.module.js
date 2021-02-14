"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var apropos_component_1 = require("./views/apropos/apropos.component");
var auth_component_1 = require("./views/auth/auth.component");
var collection_component_1 = require("./views/collection/collection.component");
var condition_component_1 = require("./views/condition/condition.component");
var faq_component_1 = require("./views/faq/faq.component");
var home_component_1 = require("./views/home/home.component");
var panier_component_1 = require("./views/panier/panier.component");
var produit_component_1 = require("./views/produit/produit.component");
var not_found_component_1 = require("./not-found/not-found.component");
var terme_condition_component_1 = require("./views/terme-condition/terme-condition.component");
var mention_legale_component_1 = require("./views/mention-legale/mention-legale.component");
var categorie_component_1 = require("./views/categorie/categorie.component");
var best_seller_component_1 = require("./views/best-seller/best-seller.component");
var promotion_component_1 = require("./views/promotion/promotion.component");
var code_promotion_component_1 = require("./views/code-promotion/code-promotion.component");
var routes = [
    { path: "auth", component: auth_component_1.AuthComponent },
    { path: "", redirectTo: "homepage", pathMatch: "full" },
    // { path: "homepage", component: HomepageComponent },
    { path: "homepage", component: home_component_1.HomeComponent },
    { path: "produit/:id", component: produit_component_1.ProduitComponent },
    { path: "best-seller", component: best_seller_component_1.BestSellerComponent },
    { path: "collection", component: collection_component_1.CollectionComponent },
    { path: "categorie", component: categorie_component_1.CategorieComponent },
    { path: "code-promo", component: code_promotion_component_1.CodePromotionComponent },
    { path: "panier", component: panier_component_1.PanierComponent },
    { path: "promotion", component: promotion_component_1.PromotionComponent },
    { path: "terme-condition", component: terme_condition_component_1.TermeConditionComponent },
    { path: "mention-legale", component: mention_legale_component_1.MentionLegaleComponent },
    { path: "apropos", component: apropos_component_1.AproposComponent },
    { path: "condition", component: condition_component_1.ConditionComponent },
    { path: "faq", component: faq_component_1.FaqComponent },
    { path: "**", component: not_found_component_1.NotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
