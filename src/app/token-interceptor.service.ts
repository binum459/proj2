import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private Injector:Injector) { }
  intercept(req:any,nxt:any)
  {
let authService = this.Injector.get(AuthService);
let tokenizedReq = req.clone(
  {
  setHeaders:{
    Authorization:`Bearer ${authService.getToken()}`
  }
}
)
return nxt.handle(tokenizedReq)
  }
}
