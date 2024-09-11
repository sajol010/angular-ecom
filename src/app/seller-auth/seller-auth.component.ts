import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SigUp, SigIn } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin: boolean = false;
  authError: string = "";

  constructor(private sellerService: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.sellerService.reloadSeller();
    
  }
  signUp(data: SigUp): void {
    this.sellerService.userSignup(data);
  }

  showLoginForm(): void {
    this.showLogin = true;
  }

  showRegistrationForm(): void{
    this.showLogin = false;
  }

  login(data: SigIn): void{
    this.sellerService.login(data);

    this.sellerService.isLoginError.subscribe((isError) => {
        if(isError)
          this.authError = "Invalid email or password";
    })
  }
}
