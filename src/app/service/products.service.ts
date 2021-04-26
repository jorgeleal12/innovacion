import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  Url = environment.routeGlobal;
  constructor(private http: HttpClient) { }

  FindAllProducts(): Observable<any> {
    return this.http.get(`${this.Url}productos?_embed=categorias`);
  }

  FindAllCategory(): Observable<any> {
    return this.http.get(`${this.Url}categorias `);
  }

  CreateProducts(products): Observable<any> {
    return this.http.post(`${this.Url}productos`,products);
  }

  UpdateProducts(products): Observable<any> {
    return this.http.patch(`${this.Url}productos/${products.id}`,products);
  }

  DeleteProducts(id): Observable<any> {
    return this.http.delete(`${this.Url}productos/${id}`);
  }
}
