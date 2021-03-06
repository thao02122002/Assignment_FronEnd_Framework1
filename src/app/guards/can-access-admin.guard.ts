import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(private router: Router
    ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       //lấy ra thông tin của user trong ,ocalStorage
    const loggedInUser =localStorage.getItem('loggedInUser');
    const checkAdmin = JSON.parse(localStorage.getItem('loggedInUser') || '[]')
    //kiểm tra xem thông tin có chính xác k
    console.log(loggedInUser);
    
    if(loggedInUser && checkAdmin.user.role === 1) {
      return true;
    }
    //nếu đúng thì tiếp nếu sai thì quay về login
   this.router.navigateByUrl('')
    return false;
  }
  
}
