import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../common/http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private _http: HttpService
  ) { }

  getData(): Observable<any> {
    return this._http._get("dashboard");
  }

}
