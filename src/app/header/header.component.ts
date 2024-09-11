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

  constructor(private router: Router){

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

  logout(): void{
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
}
