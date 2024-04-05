import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-view-articles',
  templateUrl: './view-articles.component.html',
  styleUrls: ['./view-articles.component.css']
})
export class ViewArticlesComponent implements OnInit{
  public lstArticlePublic : any = [];
  pathImg : string = "";
  pageSize = 5;
  currentPage = 1;

  constructor(
    private article:ArticleService
  ){}


  ngOnInit(): void {
    this.getAllArticlesPublic();
  }


  getAllArticlesPublic(){
    this.article.getAllArticlesPublic().subscribe(data => {
      this.lstArticlePublic = data;
      this.pathImg = this.article.Img;
    });
  }
}
