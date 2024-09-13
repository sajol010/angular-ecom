import { ProductService } from './../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  productId: string = ""
  message: string = ""
  product : undefined | Product
    constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router){
       this.productId = this.route.snapshot.paramMap.get('id') ?? "";
    }

    ngOnInit(): void {
      this.getProductById();

    }

    updateProduct(product: Product){
        this.productService.updateProduct(this.productId, product).subscribe(result => {
          if(result){
            this.message = "Product updated successfully";
            setTimeout(() => {
              this.message = ""
            }, 3000);

            this.router.navigate(['/seller-home'])
          }
        })
    }

    getProductById(): void {
        this.productService.getProductById(this.productId).subscribe(product => {
          this.product = product;
        });
    }
}
