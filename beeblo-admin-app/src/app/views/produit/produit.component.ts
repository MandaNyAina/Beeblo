import { Component, OnInit } from '@angular/core';
import { Header } from '../../interface/header';
import { Produit } from '../../interface/produit';
import { MessagesService } from '../../services/message/message.service';
import { ProduitService } from '../../services/produit/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  header: Array<Header>;
  produits: Array<Produit>;
  loading: boolean = false;

  constructor(
    private _produit: ProduitService,
    private message: MessagesService
  ) { }

  ngOnInit() {
    this.header = [
      {
        key: "numero_produit",
        name: "Numero produit",
      },
      {
        key: "nom_produit",
        name: "Nom du produit",
      },
      {
        key: "prix_produit",
        name: "Prix",
      },
      {
        key: "stock_produit",
        name: "Stock produit",
      },
      {
        key: "categorie",
        name: "Categorie",
      },
      {
        key: "status",
        name: "Statut",
      },
      {
        key: "prix_reduction",
        name: "Prix reduction",
      }
    ]
    this.getAll();
  }

  getAll() {
    this.loading = true;
    this._produit.getAll().subscribe(res => {
      this.produits = res;
      this.loading = false;
    }, err => {
      this.message.error("Erreur", err.error)
      this.loading = false;
    })
  }

}
