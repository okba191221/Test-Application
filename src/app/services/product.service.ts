import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public url= 'http://localhost:3000/products/'
  public list: Product[];
  constructor(private http: HttpClient) {
  }
  getListProduct(){
    return this.http.get<Product[]>(this.url)
  }
  addProduct(p:Product){
    return  this.http.post(this.url,p)
  }
  deleteProduct(id:number){
    return this.http.delete(this.url+id)
  }
  updateProduct(id:number,p:Product){
    return this.http.put(this.url+id,p)
  }
  getProductById(id:number){
    return this.http.get<Product>(this.url+id)
  }

}
