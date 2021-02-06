import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _user: UserService,
    private Route: Router
  ) { }

  canActivate(): boolean {
    if (!this._user.isAuthenticated()) {
      this.Route.navigate(['/login']);
      return false;
    }
    return true;
  }

}
