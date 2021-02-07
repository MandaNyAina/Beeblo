import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../../interface/categorie';
import { Produit } from '../../interface/produit';
import { Promotion } from '../../interface/promotion';
import { HttpService } from '../common/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private _http: HttpService) { }

  // produits

  public add(data: Produit): Observable<any> {
    return this._http._post("produit/add", data);
  }

  public update(id_produit: number, data: Produit): Observable<any> {
    return this._http._post(`produit/update/${id_produit}`, data);
  }

  public getAll(): Observable<Produit[]> {
    return this._http._get("produit/getAll");
  }

  public getById(id_produit: number): Observable<Produit> {
    return this._http._get(`produit/getById/${id_produit}`);
  }

  // promotion

  public addPromo(data: Promotion): Observable<any> {
    return this._http._post("promotion/add", data);
  }

  public updatePromo(id_promotion: number, data: Promotion): Observable<any> {
    return this._http._post(`promotion/update/${id_promotion}`, data);
  }

  public getPromo(type: string) {
    return this._http._get(`promotion/getAll/${type}`);
  }

  public getByIdPromo(id_produit: number): Observable<Promotion> {
    return this._http._get(`promotion/getById/${id_produit}`);
  }

  // categorie

  public addCategorie(data: Categorie): Observable<any> {
    return this._http._post(`produit/category`, data);
  }

  public getCategories(): Observable<Categorie[]> {
    return this._http._get(`produit/category`);
  }

  public updateCategorie(id_categorie: number, data: Categorie): Observable<any> {
    return this._http._post(`produit/category/${id_categorie}`, data);
  }

  public getCategorieById(id_categorie: number): Observable<Categorie> {
    return this._http._get(`produit/category/${id_categorie}`);
  }

  public deleteCategorie(id_categorie: number): Observable<any> {
    return this._http._delete(`produit/category/${id_categorie}`);
  }

}
