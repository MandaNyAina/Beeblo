import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../interface/categorie';
import { Header } from '../../interface/header';
import { MessagesService } from '../../services/message/message.service';
import { ProduitService } from '../../services/produit/produit.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  header: Array<Header>;
  categories: Array<Categorie>;
  loading: boolean = false;

  constructor(
    private _produit: ProduitService,
    private message: MessagesService
  ) { }

  ngOnInit() {
    this.header = [
      {
        key: "nom_categorie",
        name: "Nom du categorie"
      }
    ];

    this.getAll()
  }

  getAll() {
    this.loading = true;
    this._produit.getCategories().subscribe(res => {
      this.categories = res;
      this.loading = false;
    }, err => {
      this.message.error("Erreur", err.error)
    })
  }

}
