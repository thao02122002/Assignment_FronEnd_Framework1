import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientLayoutComponent} from './layouts/client-layout/client-layout.component'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { HomeComponent } from './pages/client/home/home.component';
import { ProductComponent } from './pages/client/product/product.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductComponent
      },
      {
        path: 'products/:_id',
        component: ProductDetailComponent
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard],
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductListComponent
          },
          {
            path: 'create',
            component: AdminProductFormComponent
          },
          {
            path: 'edit/:_id',
            component: AdminProductFormComponent
          },
          {
            path: ':_id',
            component: AdminProductDetailComponent
          }
        ]
      }
    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard] // đư vào để router bên trên có thể dùng
})
export class AppRoutingModule { }
