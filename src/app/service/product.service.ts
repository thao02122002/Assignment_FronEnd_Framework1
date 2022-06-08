import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreate } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
// khai báo http để có đối tượng httpClient tương tác với các phương thức của API
  constructor(private http:HttpClient) { }
 // kiểu dữ liệu observable sẽ giúp lắng nghe api trả về kết quả
  getProducts (): Observable<Product[]> {
     return this.http.get<Product[]>(environment.products);
  }
  getProduct (_id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.products}/${_id}`)

  }
  deleteProduct (_id: string): Observable<any> {
      return this.http.delete(`${environment.products}/${_id}`)
  }
  createProduct(data: ProductCreate): Observable<Product> {
    return this.http.post<Product>(`${environment.products}`,data)
  }
  updateProduct(_id: string, data: ProductCreate): Observable<Product> {
    return this.http.patch<Product>(`${environment.products}/${_id}`,data)
  }
}
