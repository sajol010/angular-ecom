import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigIn, SigUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLogedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  constructor(private http : HttpClient, private router: Router) { }
  userSignup(data: SigUp){
    return this.http.post("http://localhost:3000/seller", data, {observe: 'response'}).subscribe((result) => {
        this.isSellerLogedIn.next(true);
        localStorage.setItem("seller", JSON.stringify(result.body));
        this.router.navigate(['/seller-home']);
    });
  }
  
  reloadSeller(){
    if(localStorage.getItem("seller")){
      this.isSellerLogedIn.next(true);
      this.router.navigate(['/seller-home']);
    }
  }

  // login user
  login(data: SigIn){
    const url = '?email=' + data.email + '&password=' + data.password
    return this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, {observe: 'response'}).subscribe((result: any) => {

      if(result.body.length > 0){
          this.isSellerLogedIn.next(true);
          localStorage.setItem("seller", JSON.stringify(result.body));
          this.router.navigate(['/seller-home']);
        }else{
          this.isLoginError.emit(true);
        }
    });
  }
}
