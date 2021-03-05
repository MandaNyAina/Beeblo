import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../../interface/menu';
import { User } from '../../interface/user';
import { HttpService } from '../common/http.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Groupe } from '../../interface/groupe';

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

  public add(data: User): Observable<any> {
    return this._httpService._post(`admin/add`, data);
  }

  public getUserConnected(): User {
    return JSON.parse(localStorage.getItem("user_data"));
  }

  public getAllUser(): Observable<User[]> {
    return this._httpService._get("admin/listAll");
  }

  public getUserById(id_administrateur: number): Observable<User> {
    return this._httpService._get(`admin/getById/${id_administrateur}`);
  }

  public updateUser(id_administrateur: number, data: User): Observable<any> {
    return this._httpService._post(`admin/update/${id_administrateur}`, data);
  }

  public changeStatutLogin(id_login: number): Observable<any> {
    return this._httpService._post(`login/changeStatus/admin/${id_login}`, []);
  }

  public resetPassword(id_login: number): Observable<User> {
    return this._httpService._post(`login/reset_password/admin/${id_login}`, []);
  }

  // groupe utilisateur

  public createGroupUser(data: Groupe): Observable<any> {
    return this._httpService._post(`grant/createGroup`, data);
  }

  public updateGroupUser(id_groupe: number, data: Groupe): Observable<any> {
    return this._httpService._post(`grant/updateGroupUser/${id_groupe}`, data);
  }

  public getAllGroupUser(): Observable<Groupe[]> {
    return this._httpService._get(`grant/getAllGroupUser`);
  }

  // Doit utilisateur

  public getAllMenu(): Observable<any> {
    return this._httpService._get(`grant/getAll`);
  }

  public buildMenu(id_groupe: number): Observable<Menu> {
    return this._httpService._get(`grant/buildMenu/${id_groupe}`);
  }

  public getMenuByGroupe(id_groupe: number): Observable<any> {
    return this._httpService._get(`grant/getMenuByGroupe/${id_groupe}`);
  }

  public haveAccess(data: Object): Observable<any> {
    return this._httpService._post(`grant/isAccess`, data);
  }

  public deleteAccess(): Observable<any> {
    return this._httpService._delete(`grant/deleteAccess`);
  }

}
