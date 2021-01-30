import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.scss']
})
export class UsersCrudComponent implements OnInit {
  header: Array<Object>;
  constructor(
    private _user: UserService
  ) { }

  ngOnInit() {
    // this.header = [
    //   {
    //     key: "id",
    //     name: "Id",
    //   },
    //   {
    //     key: "nom",
    //     name: "Nom d'utilisateur",
    //   },
    //   {
    //     key: "first_name",
    //     name: "Prenom",
    //   },
    //   {
    //     key: "status",
    //     name: "Statut",
    //   },
    //   {
    //     key: "groupe",
    //     name: "Groupe",
    //   },

    // ];

    this._user._getAllUser().subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

}
