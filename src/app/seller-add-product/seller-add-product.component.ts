import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
productCreateMessage: string = "";
  constructor(private productService: ProductService) {}

  addProduct(data: Product){
    this.productService.addProduct(data).subscribe(
      (res) => {
        this.productCreateMessage = "Product added successfully";
        setTimeout(() => {
          this.productCreateMessage = ""
        }, 3000);
      },
      (err) => console.error(err)
    );
  }
}
