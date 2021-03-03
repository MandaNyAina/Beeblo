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
        width: 100
      },
      {
        key: "nom_produit",
        name: "Nom du produit",
        width: 100
      },
      {
        key: "prix_produit",
        name: "Prix",
        width: 100
      },
      {
        key: "stock_produit",
        name: "Stock produit",
        width: 100
      },
      {
        key: "categorie",
        name: "Categorie",
        width: 100
      },
      {
        key: "status",
        name: "Statut",
        width: 100
      },
      {
        key: "prix_reduction",
        name: "Prix reduction",
        width: 100
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
