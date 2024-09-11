import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = 'seller'

  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
       if(val.url){
          if(localStorage.getItem('seller') && val.url.includes('seller')){
            this.menuType = 'seller';
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
