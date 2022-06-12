import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { LoginComponent } from './pages/auth/login/login.component'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './pages/client/home/home.component';
import { ProductComponent } from './pages/client/product/product.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';

// import { CartComponent } from './pages/client/cart/cart.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminCategoryDetailComponent } from './pages/admin/admin-category/admin-category-detail/admin-category-detail.component';
import { CategoryComponent } from './pages/client/category/category.component';
import { CartClientComponent } from './pages/client/cart-client/cart-client.component';
import { SlideShowComponent } from './pages/client/slide-show/slide-show.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { AdminUserFormComponent } from './pages/admin/admin-user/admin-user-form/admin-user-form.component';
import { AdminUserDetailComponent } from './pages/admin/admin-user/admin-user-detail/admin-user-detail.component';
import { CategoryDetailComponent } from './pages/client/category-detail/category-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminProductListComponent,
    AdminProductFormComponent,
    AdminProductDetailComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    ShowValidateComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    // CartComponent,
    SignupComponent,
    CartComponent,
    AdminCategoryListComponent,
    AdminCategoryFormComponent,
    AdminCategoryDetailComponent,
    CategoryComponent,
    CartClientComponent,
    SlideShowComponent,
    AdminUserListComponent,
    AdminUserFormComponent,
    AdminUserDetailComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
