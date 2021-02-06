import { Component, OnInit } from '@angular/core';
import { User } from '../../../interface/user';
import { MessagesService } from '../../../services/message/message.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.scss']
})
export class UsersCrudComponent implements OnInit {
  header: Array<Object>;
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
      },
      {
        key: "nom_administrateur",
        name: "Nom d'utilisateur",
      },
      {
        key: "prenom_administrateur",
        name: "Prenom",
      },
      {
        key: "designation_status",
        name: "Statut",
      },
      {
        key: "id_groupe",
        name: "Groupe",
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
