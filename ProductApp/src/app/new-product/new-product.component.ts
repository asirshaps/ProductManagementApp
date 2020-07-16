import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductModel } from './new-product.model';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  title: String = "Add Product";
  constructor(private productService: ProductService, private router: Router) { }
  productItem = new ProductModel(null, null, null, null, null, null, null, null);
  ngOnInit() {
  }
  AddProduct() {
    this.productService.newProduct(this.productItem);
    setTimeout (() => {
      //this.productService.newProduct(this.productItem);
      // alert("Hello from setTimeout");
      console.log("called");
    console.log(this.productItem);
    alert("success");
    this.router.navigate(['/']);
   }, 1000);

    
  }
}
