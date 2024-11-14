// auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('jwtToken'); // Retrieve the token from storage

    // Skip adding Authorization header for login and register endpoints
    if (req.url.includes('/login') || req.url.includes('/register') || req.url.includes('/home')) {
      return next.handle(req);
    }

    // if (token) {
      // Clone the request and set the Authorization header
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(cloned);
    // }
    // return next.handle(req);
  }
}
