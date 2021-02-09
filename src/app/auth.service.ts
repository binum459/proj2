import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import{ HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router:Router,private http:HttpClient) { }
  login(user){
    return this.http.post<any>('http://localhost:3000/login',user);
  }
  logout(){
    localStorage.clear();
    this._router.navigate(['/login'])
  }
  loggedin(){
    return !!localStorage.getItem('token')
  }
getToken(){
  return localStorage.getItem('token')
}



}
