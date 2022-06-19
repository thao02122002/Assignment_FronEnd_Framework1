import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLoginRequest, TypeLoginResponse, TypeSignupResponse, User } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(data: TypeLoginRequest) : Observable<TypeLoginResponse> {
    return this.http.post<TypeLoginResponse>(environment.signin, data)
  }
  signup(data: TypeLoginRequest) : Observable<TypeSignupResponse> {
    return this.http.post<TypeSignupResponse>(environment.signup, data)
  }
  getUsers (): Observable<TypeLoginRequest[]> {
    return this.http.get<TypeLoginRequest[]>(environment.users);
 }
 getUser (_id: string): Observable<TypeLoginRequest> {
   return this.http.get<TypeLoginRequest>(`${environment.users}/${_id}`)

 }
 deleteUser (_id: string): Observable<any> {
     return this.http.delete(`${environment.users}/${_id}`)
 }
 updateUser(_id: string, data: User): Observable<User> {
  return this.http.patch<User>(`${environment.users}/${_id}`,data)
}
}
