import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Url = environment.routeGlobal;
  constructor(private http: HttpClient) { }

  Login(user: string, password: string): Observable<any> {
    return this.http.get(`${this.Url}login?user=${user}&password=${password}`);
  }

}
