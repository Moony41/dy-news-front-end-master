import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  constructor( private httpClient: HttpClient) { }

  public registerUser(user: any): Observable<any>{
    console.log(user);

    return this.httpClient.post<any>('http://localhost:8080/auth/register', user);
  }

  public loginUser(user: any): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/auth/login', user);
  }

  public callCategories():Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/api/categories');
  }
}
