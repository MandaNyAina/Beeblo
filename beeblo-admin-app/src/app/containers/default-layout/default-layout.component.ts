import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public annee = (new Date()).getFullYear();

  constructor(
    private Route: Router,
    private _user: UserService
  ) { }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this._user.logout();
    this.Route.navigate(['/login']);
  }
}
