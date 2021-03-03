import { Component, OnInit } from '@angular/core';
import { Header } from '../../../interface/header';
import { Promotion } from '../../../interface/promotion';
import { MessagesService } from '../../../services/message/message.service';
import { ProduitService } from '../../../services/produit/produit.service';

@Component({
  selector: 'app-liste-promo',
  templateUrl: './liste-promo.component.html',
  styleUrls: ['./liste-promo.component.scss']
})
export class ListePromoComponent implements OnInit {
  header: Array<Header>;
  promotions: Array<Promotion>
  loading: boolean = false;
  filtered?: string = "all";

  constructor(
    private _produit: ProduitService,
    private message: MessagesService
  ) { }

  ngOnInit() {
    this.getAll();
    this.header = [
      {
        key: "reduction_promotion",
        name: "Valeur (en %)",
        width: 100
      },
      {
        key: "type_promotion",
        name: "Type de promotion",
        width: 100
      },
      {
        key: "date_expiration_promotion",
        name: "Date d'expiration",
        width: 100
      },
      {
        key: "used",
        name: "Utilisé",
        width: 100
      }
    ];

    this.getAll();
  }

  getAll() {
    this._produit.getPromo("all").subscribe(res => {
      this.promotions = res;
    }, err => {
      this.message.error("Erreur", err.error)
    })
  }

  onChange() {
    this._produit.getPromo(this.filtered).subscribe(res => {
      this.promotions = res;
    }, err => {
      this.message.error("Erreur", err.error)
    })
  }

}
