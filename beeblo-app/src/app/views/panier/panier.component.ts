import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { MessagesService } from 'src/app/services/messages/messages.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  items: MenuItem[];
  info: any = "";
  listProduit: Array<any>;
  panierValeur: any;
  currency: String;

  constructor(
    private msg: MessagesService,
    private route: Router
  ) { }

  ngOnInit() {
    this.items = [
      {label:'Acceuil', url: '/homepage'},
      {label:'Mon panier'}
    ];
    this.currency = "€";
    this.getPanierValeur();
    this.getAllProduit()
  }

  getPanierValeur() {
    this.panierValeur = {
      article: 3,
      sous_total: 330,
      total: 330,
      info_livraison: "Information concernant la livraison"
    }
  }

  getAllProduit() {
    let teste = [
      { id: 1,
        prix: 50,
        decri: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        color: ["tomato", "violet", "grey"],
        taille: "M",
        quatinte: 2,
        image: "default-3.png"
      },
      { id: 2,
        prix: 110,
        decri: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        color: ["grey"],
        taille: "S",
        quatinte: 1,
        image: "default-2.png"
      },
      { id: 3,
        prix: 40,
        decri: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        color: ["green", "pink"],
        taille: "XL",
        quatinte: 3,
        image: "default-3.png"
      }
    ]

    this.listProduit = teste;
  }

  openProduit(id) {
    this.route.navigate(['/produit',id])
  }

  onDelete(id) {
    this.msg.success("Suppression panier", `Produit ${id} supprimé`)
  }

}
