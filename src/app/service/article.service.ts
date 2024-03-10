import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../model/article'; 

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url= "https://run.mocky.io/v3/968ce489-0274-4b69-b882-3630d036a56e";

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(this.url);
  }

  public getById(id: number): Observable<Article>{
    return this.httpClient.get<Article>(this.url + '/${id}');
  }

  public post(post: Article): Observable<Article>{
    return this.httpClient.post<Article>(this.url, post);
  }
}
