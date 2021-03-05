import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { Categorie } from '../../../interface/categorie';
import { MessagesService } from '../../../services/message/message.service';
import { ProduitService } from '../../../services/produit/produit.service';

@Component({
  selector: 'app-modal-categorie',
  templateUrl: './modal-categorie.component.html',
  styleUrls: ['./modal-categorie.component.scss']
})
export class ModalCategorieComponent implements OnInit {
  categorieForm: FormGroup;
  data: Categorie;

  constructor(
    private message: MessagesService,
    private _produitSvc: ProduitService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.data = this.config.data;
    this.categorieForm = this.fb.group({
      id_status: [24],
      nom_categorie: [this.data ? this.data.nom_categorie : '', Validators.required]
    })
  }

  saveData(formData: Categorie): Observable<string> {
    return this.data ? this._produitSvc.updateCategorie(this.data.id_categorie, formData) :
                       this._produitSvc.addCategorie(formData);
  }

  saveCategorie() {
    this.categorieForm.markAllAsTouched();
    if (this.categorieForm.valid) {
      const data: Categorie = this.categorieForm.value;
      this.saveData(data).subscribe((res: string) => {
        this.ref.close(res);
      }, (err: HttpErrorResponse) => {
        this.message.error('Erreur', `Erreur d'enregistrement d'acheteur : ${err.message}`);
      });

    }
  }

}
