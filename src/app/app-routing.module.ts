import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    component:SellerAddProductComponent,
    path: 'seller/add-product',
    canActivate: [AuthGuard]
  },
  {
    path: 'seller/update-product/:id',
    component: SellerUpdateProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'details/:productId',
    component: ProductDetailsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'search/:query',
    component: SearchComponent,
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
