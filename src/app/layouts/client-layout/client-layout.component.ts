import { Component, OnInit } from '@angular/core';
import { TypeLoginRequest, TypeLoginResponse } from 'src/app/types/Auth';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
user: boolean = false
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('loggedInUser')
  }
  an(){
    const User = JSON.parse(localStorage.getItem('loggedInUser') || '[]') 
    if(User){
      this.user = true
    }
     
  }

}
