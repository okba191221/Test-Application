import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public product: Product;
  public action : string;
  constructor(private productService: ProductService,
    private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.currentRoute.snapshot.params['id'])
    //condition id
    let id= this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action = "update";
      //update  +1 examen
      this.productService.getProductById(id).subscribe(
        (data: Product)=> this.product= data
      )
    }else
      {
        this.action = "save";
        this.product= new Product();
      }
  }
  saveProduct(){
    if(this.action == "save"){
        this.product.nbrLike=0;
        //this.productService.list.push(this.product);
        this.productService.addProduct(this.product).subscribe(
          ()=>this.router.navigate(['/list'])
        );
      }
      else{
        this.productService.updateProduct(this.product.id, this.product).subscribe(
          ()=>this.router.navigate(['/list'])
        );
      }
  }
}
