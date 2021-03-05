import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Categorie } from '../../interface/categorie';
import { Header } from '../../interface/header';
import { ModalCategorieComponent } from '../../modules/modal/modal-categorie/modal-categorie.component';
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
    private message: MessagesService,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.header = [
      {
        key: "nom_categorie",
        name: "Nom du categorie",
        width: 50
      }
    ];

    this.getAllCategorie()
  }

  getAllCategorie() {
    this.loading = true;
    this._produit.getCategories().subscribe(res => {
      this.categories = res;
      this.loading = false;
    }, err => {
      this.message.error("Erreur", err.error)
    })
  }

  onSetCategorie(type: string, data: Categorie = null) {
    const ref = this.dialogService.open(ModalCategorieComponent, {
      header: type == 'edit' ? `Modifié ${data?.nom_categorie}` : `Ajouter un categorie`,
      width: '70%',
      data
    });

    ref.onClose.subscribe((res: string) => {

      if (res == 'saved' || res == 'updated') {
        this.message.success('Succes', "Categorie enregistrer avec succes");
      } else if (res) {
        this.message.error('Erreur', res);
      }

      this.getAllCategorie();

    });
  }

  onDelete(data: Categorie) {

  }



}
