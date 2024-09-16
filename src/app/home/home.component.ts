import { Component } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  popularProducts: undefined | Product[]
  trendyProducts: undefined | Product[]

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.getPopularProducts();
  }

  getPopularProducts(): void {
    this.productService.productList().subscribe((result) => {
      this.popularProducts = result
      this.trendyProducts = result
    });
  }
}
