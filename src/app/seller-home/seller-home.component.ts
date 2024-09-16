import { Product } from './../data-type';
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import {faCoffee, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productMessage : string = '';
  productList: undefined | Product []
  icon = {
    delete: faTrash,
    coffee: faCoffee,
    edit: faEdit
  }
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList();    
  }

  getProductList(): void {
    this.productService.productList().subscribe((result) => {
      this.productList = result
  });
  }

  deleteProduct(id: string){
    this.productService.deleteProduct(id).subscribe((result) => {
        if(result){
          this.productMessage = "Product deleted successfully";
          setTimeout(() => {
            this.productMessage = ""
          }, 3000);
          this.getProductList();
        }
    });

  }

}
