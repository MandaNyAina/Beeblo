import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acheteur } from '../../interface/acheteur';
import { HttpService } from '../common/http.service';

@Injectable({
  providedIn: 'root'
})
export class AcheteurService {

  constructor(private _http: HttpService) { }

  public add(data: Acheteur): Observable<any> {
    return this._http._post("acheteur/add", data);
  }

  public update(id_acheteur: number, data: Acheteur): Observable<any> {
    return this._http._post(`acheteur/update/${id_acheteur}`, data);
  }

  public getAll(): Observable<Acheteur[]> {
    return this._http._get(`acheteur/listAll`);
  }

  public getById(id_acheteur: number): Observable<Acheteur> {
    return this._http._get(`acheteur/getById/${id_acheteur}`);
  }

}
