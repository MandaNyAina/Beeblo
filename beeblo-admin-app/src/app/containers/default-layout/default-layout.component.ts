import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public annee = (new Date()).getFullYear();

  constructor(private Route: Router) { }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.Route.navigate(['/login']);
  }
}
