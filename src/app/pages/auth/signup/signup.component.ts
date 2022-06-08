import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signUpForm: FormGroup
  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
    ) {
      this.signUpForm = new FormGroup({
       email: new FormControl('', [
         Validators.required
       ]),
       password: new FormControl('', [
         Validators.required
       ]) 
      })
     }

  ngOnInit(): void {
  }
  onSubmit() {
    const submitData = this.signUpForm.value;
    this.authService.signup(submitData).subscribe(data => {
      console.log(data);
      
      // điều hướng quay về admin
      if(data) {
        this.toastr.success('Đăng ký thành công, chờ 3s để chuyển trang')
        setTimeout(() => {
          this.router.navigateByUrl('/auth/login')
        },3000)
      }
    
      
    })
  }

}
