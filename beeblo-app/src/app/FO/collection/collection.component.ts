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
  categorie?: string = "Categorie";
  taille: string = "Taille";
  couleur: string = "Couleur";
  prix: string = "Prix";

  categories: string[];
  tailles: string[];
  couleurs: string[];
  _prix: string[];


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

  buildAutoComplete(elements: any, str_search: string): string[] {
    return elements.map(el => {
      if (el.includes(str_search)) return el;
    }).filter(value  => {return value != null;});
  }

  search(data, filtre_name) {
    switch (filtre_name) {
      case 'get_categorie':
        this.categories = this.buildAutoComplete(['Cat 1', 'Cat 2' , 'Cat 3'], data.query)
        break;

      case 'get_taille':
        this.tailles = this.buildAutoComplete(['S', 'M' , 'L', 'X'], data.query)
        break;

      case 'get_couleur':
        this.tailles = this.buildAutoComplete(['Rouge', 'Vert'], data.query)
        break;

      case 'get_prix':
        this.tailles = this.buildAutoComplete(['0 - 100', '100 - 200', '200 - 500'], data.query)
        break;
    }
  }

}
