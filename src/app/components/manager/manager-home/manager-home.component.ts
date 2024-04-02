import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent {
  public lstArticlePublic : any = [];
  pathImg : string = "";

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
