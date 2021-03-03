import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Acheteur, TypeAcheteur } from '../../../interface/acheteur';
import { AcheteurService } from '../../../services/acheteur/acheteur.service';
import { MessagesService } from '../../../services/message/message.service';

@Component({
  selector: 'app-modal-acheteur',
  templateUrl: './modal-acheteur.component.html',
  styleUrls: ['./modal-acheteur.component.scss']
})
export class ModalAcheteurComponent implements OnInit {
  listTypeClient: Array<TypeAcheteur>;
  acheteurForm: FormGroup;
  data: Acheteur;
  checked: boolean;

  constructor(
    private message: MessagesService,
    private _acheteurSvc: AcheteurService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getAllTypeAcheteur();
    this.data = this.config.data;
    this.checked = this.data?.id_status == 2 ? true : false;
    this.acheteurForm = this.fb.group({
      id_status: [this.data?.id_status == 2 ? true : false],
      nom_acheteur: [this.data ? this.data['nom_acheteur'] : '', Validators.required],
      prenom_acheteur: [this.data ? this.data['prenom_acheteur'] : ''],
      email_acheteur: [this.data ? this.data['email_acheteur'] : '', [Validators.required, Validators.email]],
      mot_de_passe_acheteur: ['', !this.data ? Validators.required: null],
      numero_client_acheteur: [this.data ? this.data['numero_client_acheteur'] : '', Validators.required],
      adresse_acheteur: [this.data ? this.data['adresse_acheteur'] : '', Validators.required],
      code_postal: [this.data ? this.data['code_postal'] : '', Validators.required],
      ville_acheteur: [this.data ? this.data['ville_acheteur'] : '', Validators.required],
      pays_acheteur: [this.data ? this.data['pays_acheteur'] : '', Validators.required],
      id_type_acheteur: [this.data ? this.data['id_type_acheteur'] : '', Validators.required]
    });

  }

  getAllTypeAcheteur() {
    this._acheteurSvc.getAllTypeAcheteur().subscribe((res: Array<TypeAcheteur>) => {
      this.listTypeClient = res;
    })
  }

  saveAcheteur() {
    this.acheteurForm.markAllAsTouched();
    if (this.acheteurForm.valid) {
      const data: Acheteur = this.acheteurForm.value;
      if (this.data) {
        delete data['mot_de_passe'];
        data.id_status = this.checked ? 2 : 1;
        this._acheteurSvc.update(this.data['id_acheteur'], data).subscribe((res: string) => {
          this.ref.close(res);
        }, (err: HttpErrorResponse) => {
          this.message.error('Erreur', `Erreur d'enregistrement d'acheteur : ${err.message}`);
        })
      } else {
        delete data['id_status'];
        this._acheteurSvc.add(data).subscribe((res: string) => {
          this.ref.close(res);
        }, (err: HttpErrorResponse) => {
          this.message.error('Erreur', `Erreur d'enregistrement d'acheteur : ${err.message}`);
        });
      }
    }
  }

  resetPassword() {
    this._acheteurSvc.resetPassword(this.data.email_acheteur).subscribe((res: string) => {
      this.ref.close(res);
    }, (err: HttpErrorResponse) => {
      this.message.error('Erreur', `Erreur de reinitialisation : ${err.message}`);
    })
  }

}
