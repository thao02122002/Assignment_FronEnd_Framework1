import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signUpForm: FormGroup
  constructor(private authService: AuthService,
    private router: Router
    ) {
      this.signUpForm = new FormGroup({
       email: new FormControl(''),
       password: new FormControl('') 
      })
     }

  ngOnInit(): void {
  }
  onSubmit() {
    const submitData = this.signUpForm.value;
    this.authService.signup(submitData).subscribe(data => {
      console.log(data);
      
      // điều hướng quay về admin
    this.router.navigateByUrl('/auth/login')
      
    })
  }

}
