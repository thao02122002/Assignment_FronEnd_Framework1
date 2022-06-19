import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { TypeLoginRequest, TypeLoginResponse } from 'src/app/types/Auth';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
@Input() user: boolean= true
  constructor(private router: Router) { 
   
  }
  ngOnInit(): void {
    this.an()
  }
  
  an(){
    const User = JSON.parse(localStorage.getItem('loggedInUser') || '[]') 
    if(User){
      this.user = false
      console.log(this.user);
      
    }
     
  }

}
