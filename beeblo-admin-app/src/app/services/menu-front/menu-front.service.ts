import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuFront } from '../../interface/menuFront';
import { HttpService } from '../common/http.service';

@Injectable({
  providedIn: 'root'
})
export class MenuFrontService {

  constructor(
    private _http: HttpService
  ) { }

  public addMenu(data: MenuFront): Observable<any> {
    return this._http._post(`site/add`, data);
  }

  public getAllMenu(): Observable<MenuFront[]> {
    return this._http._get("site/getAllMenu");
  }

  public updateMenu(id_menu: number, data: MenuFront): Observable<any> {
    return this._http._post(`site/updateMenu/${id_menu}`, data);
  }

  public deleteMenu(id_menu: number): Observable<MenuFront> {
    return this._http._delete(`site/deleteMenu/${id_menu}`);
  }
}
