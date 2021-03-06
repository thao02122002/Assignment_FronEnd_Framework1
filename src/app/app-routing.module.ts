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
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminCategoryDetailComponent } from './pages/admin/admin-category/admin-category-detail/admin-category-detail.component';
import { CartClientComponent } from './pages/client/cart-client/cart-client.component';
import {AdminUserListComponent} from './pages/admin/admin-user/admin-user-list/admin-user-list.component'
import {AdminUserFormComponent} from './pages/admin/admin-user/admin-user-form/admin-user-form.component'
import {AdminUserDetailComponent} from './pages/admin/admin-user/admin-user-detail/admin-user-detail.component'
import { CategoryDetailComponent } from './pages/client/category-detail/category-detail.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';
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
        component: CartClientComponent
      },
      {
        path: 'category/:_id',
        component: CategoryDetailComponent
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
      },
      {
        path: 'category',
        children: [
          {
            path: '',
            component: AdminCategoryListComponent
          },
          {
            path: 'create',
            component: AdminCategoryFormComponent
          },
          {
            path: 'edit/:_id',
            component: AdminCategoryFormComponent
          },
          {
            path: ':_id',
            component: AdminCategoryDetailComponent
          }
        ]
      },
      {
        path:'users',
        children: [
          
            {
              path: '',
              component: AdminUserListComponent
            },
            
            {
              path: 'edit/:_id',
              component: AdminUserFormComponent
            },
            {
              path: ':_id',
              component: AdminUserDetailComponent
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
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard] // ???? v??o ????? router b??n tr??n c?? th??? d??ng
})
export class AppRoutingModule { }
