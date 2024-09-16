import { ProductService } from './../services/product.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = 'seller'
  seller: any = {}
  searchResult: any = []
  constructor(private router: Router, private productService: ProductService){

  }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
       if(val.url){
        let seller = localStorage.getItem('seller')
          if(seller && val.url.includes('seller')){
            this.menuType = 'seller';
            seller = JSON.parse(seller)[0]
            this.seller = seller
          }else{
            this.menuType = 'default';
          }
       }
    })
    
  }

  searchProduct(query: KeyboardEvent){
      if(query){
        const element = query.target as HTMLInputElement;
        if(element.value){
          this.productService.serachProducts(element.value).subscribe((result) => {
            if(result.length>5){
              result.length=length
            }
            this.searchResult=result;
          })
        }
      }
  }

  redirectToDetails(id:string){
    this.router.navigate(['/details/'+id])
  }

  submitSearch(val: string){
    this.router.navigate([`search/${val}`]);
  }

  hideSearch(){
    this.searchResult=undefined
  }

  logout(): void{
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
}
