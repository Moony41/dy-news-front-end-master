import { Injectable, NgModule } from '@angular/core';

import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestWithAuthCloned = req.clone();

    if(requestWithAuthCloned.url.includes('/auth')) {
      console.log('includes auth triggered');
      requestWithAuthCloned = req.clone({
        setHeaders: {
          ContentType: 'application/json'
        }
      })
    }

    if(requestWithAuthCloned.url.includes('/api')){
      console.log('includes api triggered');
      console.log('Getting session jwt, ' + sessionStorage.getItem('auth'));

      requestWithAuthCloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${sessionStorage.getItem('auth')}`
        }
      })
    }
    console.log(`Request \n ${JSON.stringify(requestWithAuthCloned)}`);

   return next.handle(requestWithAuthCloned);
  }

}
