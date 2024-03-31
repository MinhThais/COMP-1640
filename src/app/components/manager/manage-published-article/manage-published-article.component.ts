import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-manage-published-article',
  templateUrl: './manage-published-article.component.html',
  styleUrls: ['./manage-published-article.component.css']
})
export class ManagePublishedArticleComponent implements OnInit{
  public lstArticles : any = [];
  pathImg : string = "";
  status : string = "Pending";

  constructor(
    private article:ArticleService,
    private toast:ToastrService
  ){}

  ngOnInit(): void {
    this.getArticle();
  }


  getArticle(){
    this.article.getAllArticlesSelected().subscribe(data => {
      this.lstArticles = data;
      this.pathImg = this.article.Img;
    });
  }
  

  Public(contribution_id:number){
    this.article.public(contribution_id).subscribe(res => {
      this.toast.success(res.message, 'Success', {
        timeOut: 3000,
        progressBar:true,
        positionClass: 'toast-top-center'
      });
      this.status = "Public";
      this.ngOnInit();
    },
    error => {
      this.toast.error(error.error.message, 'Error', {
        timeOut: 3000,
        progressBar: true,
        positionClass: 'toast-top-center'
      });
    });
  }

  Private(contribution_id:number){
    this.article.private(contribution_id).subscribe(res => {
      this.toast.success(res.message, 'Success', {
        timeOut: 3000,
        progressBar:true,
        positionClass: 'toast-top-center'
      });
      this.status = "Private";
      this.ngOnInit();
    },
    error => {
      this.toast.error(error.error.message, 'Error', {
        timeOut: 3000,
        progressBar: true,
        positionClass: 'toast-top-center'
      });
    });
  }

}
