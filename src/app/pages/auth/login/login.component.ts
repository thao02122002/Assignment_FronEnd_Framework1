import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup
  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { 
    this.loginForm = new FormGroup({
      email: new FormControl('',  [
        Validators.required
      ]),
      password: new FormControl('',  [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const submitData = this.loginForm.value;
    this.authService.login(submitData).subscribe(data => {
      console.log(data);
      
      if(data) {
        this.toastr.success('Đăng nhập thành công, chờ 3s để chuyển trang')
        //nếu login thành công lưu vào localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(data))
        setTimeout(() => {
          // điều hướng quay về admin
          this.router.navigateByUrl('/admin/products')
        },3000)
      }
      
      
    
      
    })
  }

}
