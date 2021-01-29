import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acheteur',
  templateUrl: './acheteur.component.html',
  styleUrls: ['./acheteur.component.scss']
})
export class AcheteurComponent implements OnInit {
  header: Array<Object> = [];
  constructor() { }

  ngOnInit() {
    this.header = [
      {
        key: "num",
        name: "Numero client",
      },
      {
        key: "name",
        name: "Nom",
      },
      {
        key: "first_name",
        name: "Prenom",
      },
      {
        key: "email",
        name: "Email",
      },
      {
        key: "etat",
        name: "Statut",
      },
      {
        key: "date_ins",
        name: "Date inscription",
      },

    ]
  }

}
