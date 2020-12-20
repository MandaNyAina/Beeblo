import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages/messages.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  currency: String;
  produit?: Array<any>;
  page: Array<number> = [];
  constructor(
    private msg: MessagesService
  ) { }

  ngOnInit() {
    this.currency = "€";
    this.getProduit();
  }

  getProduit() {
    let teste = [
      { id: 1, image: "default-2.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", prix: 100 },
      { id: 2, image: "default-2.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", prix: 100 },
      { id: 3, image: "default-3.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", prix: 41 },
      { id: 4, image: "default-2.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", prix: 240 },
      { id: 5, image: "default-3.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", prix: 221 },
      { id: 6, image: "default-2.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", prix: 321 },
      { id: 7, image: "default-2.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", prix: 100 },
      { id: 8, image: "default-3.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", prix: 150 },
      { id: 9, image: "default-3.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", prix: 500 },
      { id: 10, image: "default-3.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", prix: 32 },
      { id: 11, image: "default-2.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", prix: 100 },
      { id: 12, image: "default-2.png", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", prix: 128 },
    ]
    let i = 1;
    while (i <= Math.floor(teste.length / 12)) {
      this.page.push(i);
      i++;
    }
    this.produit = teste;
  }

  onAddPanier(id) {
    this.msg.success("Ajouté au panier", `Produit ${id} ajouté au panier`)
  }

}
