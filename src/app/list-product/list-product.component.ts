import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: string;
  public list: Product[];
  constructor(private productService:ProductService) { }
  ngOnInit(): void {
    this.title='New App';
   this.productService.getListProduct().subscribe(
    (data: Product[])=> this.list= data
   );

  }
  incrementLike(product:Product){
    let i = this.list.indexOf(product);
    if(i!=-1){
        this.list[i].nbrLike++;
    }
  }
  buy(product:Product){
    let i = this.list.indexOf(product);
    if(i!=-1){
        this.list[i].quantity--;
    }
  }
  delete(product:Product){
    this.productService.deleteProduct(product.id).subscribe(
      ()=>{
        let i= this.list.indexOf(product)
        this.list.splice(i,1)
       }
    );
  }
  
  myFunction(p:Product) {
    p.status = true
    // G:proet the checkbox;
    this.productService.updateProduct(p.id,p).subscribe(()=>{this.productService.getListProduct().subscribe(
      (data: Product[])=> this.list= data
     );})
  }

}
