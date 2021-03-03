import { Component, OnInit } from '@angular/core';
import { Header } from '../../../interface/header';
import { User } from '../../../interface/user';
import { MessagesService } from '../../../services/message/message.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.scss']
})
export class UsersCrudComponent implements OnInit {
  header: Array<Header>;
  users: Array<User>;
  loading: boolean = false;

  constructor(
    private _user: UserService,
    private message: MessagesService
  ) { }

  ngOnInit() {
    this.header = [
      {
        key: "id_administrateur",
        name: "Id",
        width: 100
      },
      {
        key: "nom_administrateur",
        name: "Nom d'utilisateur",
        width: 100
      },
      {
        key: "prenom_administrateur",
        name: "Prenom",
        width: 100
      },
      {
        key: "designation_status",
        name: "Statut",
        width: 100
      },
      {
        key: "id_groupe",
        name: "Groupe",
        width: 100
      },

    ];

    this.getAllUser()

  }

  getAllUser() {
    this.loading = true;
    this._user._getAllUser().subscribe(res => {
      this.users = res;
      this.loading = false;
    }, (err) => {
      this.message.error("Erreur", err.error);
      this.loading = false;
    });
  }

}
