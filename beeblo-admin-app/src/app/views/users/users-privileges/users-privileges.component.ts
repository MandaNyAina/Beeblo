import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../interface/menu';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-users-privileges',
  templateUrl: './users-privileges.component.html',
  styleUrls: ['./users-privileges.component.scss']
})
export class UsersPrivilegesComponent implements OnInit {
  menuList: Array<Menu>;

  constructor(
    private _user: UserService
  ) { }

  ngOnInit() {
    this._user.getAllMenu().subscribe((res: Menu[]) => {
      this.menuList = res;
    })
  }

}
