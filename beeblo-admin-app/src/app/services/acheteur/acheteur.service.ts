import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acheteur, TypeAcheteur } from '../../interface/acheteur';
import { HttpService } from '../common/http.service';

@Injectable({
  providedIn: 'root'
})
export class AcheteurService {
  protected acheteur = `acheteur`;
  protected typeAcheteur = `${this.acheteur}/typeAcheteur`

  constructor(private _http: HttpService) { }

  public add(data: Acheteur): Observable<any> {
    return this._http._post(`${this.acheteur}/add`, data);
  }

  public update(id_acheteur: number, data: Acheteur): Observable<any> {
    return this._http._post(`${this.acheteur}/update/${id_acheteur}`, data);
  }

  public getAll(): Observable<Acheteur[]> {
    return this._http._get(`${this.acheteur}/listAll`);
  }

  public getById(id_acheteur: number): Observable<Acheteur> {
    return this._http._get(`${this.acheteur}/getById/${id_acheteur}`);
  }

  public deleteAccount(id_acheteur: number): Observable<any> {
    return this._http._delete(`${this.acheteur}/deleteAcheteur/${id_acheteur}`);
  }

  public resetPassword(email_acheteur: string): Observable<any> {
    return this._http._post(`${this.acheteur}/sendNewPassword/${email_acheteur}`, []);
  }

  // type acheteur

  public addTypeAcheteur(data: TypeAcheteur): Observable<any> {
    return this._http._post(`${this.typeAcheteur}/add`, data);
  }

  public getAllTypeAcheteur(): Observable<any> {
    return this._http._get(`${this.typeAcheteur}`);
  }

  public updateTypeAcheteur(id_type_acheteur: number, data: TypeAcheteur): Observable<any> {
    return this._http._post(`${this.typeAcheteur}/update/${id_type_acheteur}`, data);
  }

}
