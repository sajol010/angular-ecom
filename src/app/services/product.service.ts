import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(data: Product){
    return this.http.post('http://localhost:3000/products', data);
  }

  productList(){
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  deleteProduct(id: string){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  updateProduct(id: string, product: Product){
    return this.http.put(`http://localhost:3000/products/${id}`, product);
  }

  getProductById(id: string){
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  serachProducts(query: string){
    return this.http.get<Product[]>(`http://localhost:3000/products?q=${query}`);
  }
} 
