import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  Url = environment.routeGlobal;
  constructor(private http: HttpClient) { }

  FindAllCategories(): Observable<any> {
    return this.http.get(`${this.Url}categorias`);
  }

  CreateCategory(categories): Observable<any> {
    return this.http.post(`${this.Url}categorias`,categories);
  }

  UpdateCategory(categories): Observable<any> {
    return this.http.patch(`${this.Url}categorias/${categories.id}`,categories);
  }

  DeleteCategory(id): Observable<any> {
    return this.http.delete(`${this.Url}categorias/${id}`);
  }

  FindOneCategory(id): Observable<any> {
    return this.http.get(`${this.Url}categorias/${id}`);
  }
}
