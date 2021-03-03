import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Acheteur } from '../../interface/acheteur';
import { Header } from '../../interface/header';
import { ModalAcheteurComponent } from '../../modules/modal/modal-acheteur/modal-acheteur.component';
import { AcheteurService } from '../../services/acheteur/acheteur.service';
import { MessagesService } from '../../services/message/message.service';

@Component({
  selector: 'app-acheteur',
  templateUrl: './acheteur.component.html',
  styleUrls: ['./acheteur.component.scss']
})
export class AcheteurComponent implements OnInit {
  header: Array<Header>;
  acheteur: Array<Acheteur>;
  loading: boolean = false;

  constructor(
    private _acheteur: AcheteurService,
    private message: MessagesService,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.header = [
      {
        key: "nom_acheteur",
        name: "Nom",
        width: 100
      },
      {
        key: "prenom_acheteur",
        name: "Prenom",
        width: 100
      },
      {
        key: "email_acheteur",
        name: "Email",
        width: 200
      },
      {
        key: "numero_client_acheteur",
        name: "Numero client",
        width: 100
      },
      {
        key: "type_acheteur",
        name: "Type de compte",
        width: 100
      }
    ]

    this.getAllAcheteur();

  }

  getAllAcheteur() {
    this.loading = true;
    this._acheteur.getAll().subscribe(res => {
      this.acheteur = res;
      this.loading = false;
    }, err => {
      this.message.error("Erreur", err.error);
      this.loading = false;
    })
  }

  reloadData() {
    this.getAllAcheteur();
  }

  onSetAcheteur(type: string, data: Acheteur = null) {
    const ref = this.dialogService.open(ModalAcheteurComponent, {
      header: type == 'edit' ? `Modifié ${data?.prenom_acheteur} ${data?.nom_acheteur} ` : `Ajouter un acheteur`,
      width: '70%',
      data
    });

    ref.onClose.subscribe((res: string) => {
      console.log(res);

      if (res == 'saved' || res == 'updated') {
        this.message.success('Succes', "Acheteur enregistrer avec succes");
      } else if (res) {
        this.message.error('Erreur', res);
      }

      this.getAllAcheteur();

    });
  }

  onDelete(acheteur: Acheteur) {
    console.log(acheteur);

    this._acheteur.deleteAccount(acheteur.id_acheteur).subscribe(res => {
      if (res == 'deleted') {
        this.message.success('Succes', "Suppression avec succes");
        this.getAllAcheteur();
      } else {
        this.message.error('Erreur', res);
      }
    }, (err: HttpErrorResponse) => {
      this.message.error('Erreur', err.message);
    })

  }

}
