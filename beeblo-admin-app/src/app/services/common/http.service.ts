import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MessagesService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headerOptions?: any;

  constructor(
    private http: HttpClient,
    private message: MessagesService
  ) {

    let token = localStorage.getItem("beeblo_admin_token");
    let now = new Date;
    let now_string = String(now.getFullYear())+String(now.getMonth())+String(now.getDate());
    let authorization: string = (now_string + " " + token + " beebloAdminToken");
    this.headerOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8',
        'Authorization': authorization
      })
    };

  }

  public _get(endpoint: string): Observable<any> {
    return this.http.get(environment.apiUrl + endpoint, this.headerOptions);
  }

  public _post(endpoint: string, data: any): any {
    return this.http.post(environment.apiUrl + endpoint, data, this.headerOptions);
  }

  public _delete(endpoint: string): Observable<any> {
    return this.http.delete(environment.apiUrl + endpoint, this.headerOptions);
  }

}
