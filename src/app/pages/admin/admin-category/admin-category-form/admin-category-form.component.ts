import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
categoryForm : FormGroup;
categoryId: string
  constructor(private categoryService: CategoryService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private toastr: ToastrService) { 
                this.categoryForm = new FormGroup({
                  name: new FormControl('', [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(32),
                  ]),
                  status: new FormControl('', [
                    Validators.required
                  ])
                })
                this.categoryId=''
              }

  ngOnInit(): void {
    this.categoryId = this.activateRoute.snapshot.params['_id']
    if(this.categoryId) {
      this.categoryService.getCategory(this.categoryId).subscribe(data => {
        // cập nhật data cho form
        this.categoryForm.patchValue({
          name: data.name,
          status: data.status
        })
      })
    }
  }

  redirectToList() {
    this.router.navigateByUrl('/admin/category')
  }
  onSubmit() {
    console.log(this.categoryForm);
    // nhập dữ liệu từ form
    const data = this.categoryForm.value
    if(this.categoryId !== '' && this.categoryId !== undefined) {
        return  this.categoryService.updateCategory(this.categoryId, data).subscribe(data => {
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
   return this.categoryService.createCategory(data).subscribe(data => {
      //chuyển trang về list
      if(data) {
        this.toastr.success('Thêm danh mục thành công, chờ 3s để chuyển trang')
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
