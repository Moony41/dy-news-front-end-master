import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article-template',
  templateUrl: './article-template.component.html',
  styleUrls: ['./article-template.component.scss']
})
export class ArticleTemplateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  public article: Article | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getById(Number(id)).subscribe({
        next: (data) => {
          this.article = data;
          console.log(data);
        },
        error: (error) => {
          console.error('Error fetching article:', error);
        }
      });
    }
  }
}
