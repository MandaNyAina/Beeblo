import { Component, OnInit } from '@angular/core';
import { Acheteur } from '../../interface/acheteur';
import { Header } from '../../interface/header';
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
    private message: MessagesService
  ) { }

  ngOnInit() {
    this.header = [
      {
        key: "numero_client_acheteur",
        name: "Numero client",
      },
      {
        key: "nom_acheteur",
        name: "Nom",
      },
      {
        key: "prenom_acheteur",
        name: "Prenom",
      },
      {
        key: "email_acheteur",
        name: "Email",
      },
      {
        key: "etat_acheteur",
        name: "Statut",
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

}
