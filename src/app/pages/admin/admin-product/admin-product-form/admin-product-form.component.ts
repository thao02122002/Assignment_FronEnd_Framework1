import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
productForm: FormGroup;
productId: string
  constructor(private productService: ProductService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private toastr: ToastrService) { 
    this.productForm = new FormGroup({
       name: new FormControl('', [
         Validators.required,
         Validators.minLength(6),
         Validators.maxLength(32),
         this.onValidateNameHasProduct
       ]), // FormControl(giá trị mặc định),
       price: new FormControl('', [
        Validators.required
       
       ]),
       salePrice: new FormControl('', [
        Validators.required
       ]),
       description: new FormControl('', [
        Validators.required
       ]),
       imageUrl: new FormControl('', [
        Validators.required
       ]),
       status: new FormControl('', [
        Validators.required
       ]),
      //  category: new FormControl('', [
      //   Validators.required
      //  ]),
    });
    this.productId=''

  }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['_id']
    if(this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        // cập nhật data cho form
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          salePrice: data.salePrice,
          description: data.description,
          imageUrl: data.imageUrl,
          status: data.status,
          category: data.category
        })
      })
    }
  }

  onValidateNameHasProduct(control: AbstractControl):ValidationErrors| null {
    const inputValue = control.value
    if(!inputValue.includes('book')) {
      return {hasProductError: true}
    }
    return null
  }

   redirectToList() {
     this.router.navigateByUrl('/admin/products')
   }


  onSubmit() {
    console.log(this.productForm);
    // nhập dữ liệu từ form
    const data = this.productForm.value
    if(this.productId !== '' && this.productId !== undefined) {
        return  this.productService.updateProduct(this.productId, data).subscribe(data => {
          if(data) {
            this.toastr.success('Sửa sp thành công, chờ 3s để chuyển trang')
            setTimeout(() => {
              this.redirectToList()
              // this.router.navigate(['/admin','products'])
            },3000)
           
          }
          
          })
    }
    // call api
   return this.productService.createProduct(data).subscribe(data => {
      //chuyển trang về list
      if(data) {
        this.toastr.success('Thêm sp thành công, chờ 3s để chuyển trang')
        setTimeout(() => {
          this.redirectToList()
          // this.router.navigate(['/admin','products'])
        },3000)
       
      }
      // this.router.navigate(['/admin','products'])
      //khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call api
      // lấy ds mới

  
    })
    
    
  }

}
