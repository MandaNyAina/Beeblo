import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteInfo } from '../../interface/siteInfo';
import { SiteMail } from '../../interface/siteMail';
import { SiteReseau } from '../../interface/siteReseau';
import { HttpService } from '../common/http.service';

@Injectable({
  providedIn: 'root'
})
export class ParametrageService {

  constructor(
    private _http: HttpService
  ) { }

  public setInfo(data: SiteInfo): Observable<any> {
    return this._http._post("siteConfig/siteInfo", data);
  }

  public getInfo(): Observable<SiteInfo> {
    return this._http._get("siteConfig/siteInfo");
  }

  public setMail(data: SiteMail): Observable<any> {
    return this._http._post("siteConfig/mailConfig", data);
  }

  public getMail(): Observable<SiteMail> {
    return this._http._get("siteConfig/mailConfig");
  }

  public setReseau(data: SiteReseau): Observable<any> {
    return this._http._post("siteConfig/reseaux", data);
  }

  public getReseau(): Observable<SiteReseau> {
    return this._http._get("siteConfig/reseaux");
  }
}
