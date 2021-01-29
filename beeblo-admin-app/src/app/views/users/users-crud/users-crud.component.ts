import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.scss']
})
export class UsersCrudComponent implements OnInit {
  header: Array<Object>;
  constructor() { }

  ngOnInit() {
    this.header = [
      {
        key: "id",
        name: "Id",
      },
      {
        key: "nom",
        name: "Nom d'utilisateur",
      },
      {
        key: "first_name",
        name: "Prenom",
      },
      {
        key: "status",
        name: "Statut",
      },
      {
        key: "groupe",
        name: "Groupe",
      },

    ]
  }

}
