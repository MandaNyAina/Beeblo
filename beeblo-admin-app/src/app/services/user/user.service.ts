import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../../interface/menu';
import { User } from '../../interface/user';
import { HttpService } from '../common/http.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token?: string;

  constructor(
    private _httpService: HttpService
  ) { }

  // Connexion utilisateur

  public login(data: Object): Observable<any> {
    return this._httpService._post("login/auth/asAdmin", data);
  }

  public logout(): void {
    localStorage.clear();
  }

  public isAuthenticated(): boolean {
    let token = localStorage.getItem("beeblo_admin_token");
    const jwtHelper = new JwtHelperService();
    return token && !jwtHelper.isTokenExpired(token);
  }

  // Gestion utilisateur

  public _add(data: User): Observable<User> {
    return this._httpService._post(`admin/add`, data);
  }

  public _getUserConnected(): User {
    return JSON.parse(localStorage.getItem("user_data"));
  }

  public _getAllUser(): Observable<User[]> {
    return this._httpService._get("admin/listAll");
  }

  public _getUserById(id_administrateur: number): Observable<User> {
    return this._httpService._get(`admin/getById/${id_administrateur}`);
  }

  public _updateUser(id_administrateur: number, data: User): Observable<User> {
    return this._httpService._post(`admin/update/${id_administrateur}`, data);
  }

  public  _changeStatutLogin(id_login: number): Observable<User> {
    return this._httpService._post(`login/changeStatus/admin/${id_login}`, []);
  }

  public _resetPassword(id_login: number): Observable<User> {
    return this._httpService._post(`login/reset_password/admin/${id_login}`, []);
  }

  // Doit utilisateur

  public _getAllMenu(): Observable<any> {
    return this._httpService._get(`grant/getAll`);
  }

  public _buildMenu(id_groupe: number): Observable<Menu> {
    return this._httpService._get(`grant/buildMenu/${id_groupe}`);
  }

  public _getMenuByGroupe(id_groupe: number): Observable<any> {
    return this._httpService._get(`grant/getMenuByGroupe/${id_groupe}`);
  }

  public _hasAccess(data: Object): Observable<any> {
    return this._httpService._post(`grant/isAccess`, data);
  }

  public _deleteAccess(): Observable<any> {
    return this._httpService._delete(`grant/deleteAccess`);
  }

}
