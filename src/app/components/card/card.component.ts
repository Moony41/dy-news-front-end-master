import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  
  constructor(private articleService: ArticleService,
              private htttp:HttpClient,
              private router:Router){}

  public post: Article[] = [];
  
  ngOnInit() {
    this.articleService.getAll().subscribe({
      next:(response) =>{
        this.post = response;
      },
      error:(err) => alert("ocorreu um erro" + JSON.stringify(err))
    })
  }

  goToArticle(articleId: number): void {
    this.router.navigate(['/article', articleId]);
  }
}
