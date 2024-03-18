import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/services/api.service';
import { ArticleService } from 'src/app/services/article.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-management-articles',
  templateUrl: './management-articles.component.html',
  styleUrls: ['./management-articles.component.css']
})
export class ManagementArticlesComponent implements OnInit{
  public lstArticles : any = [];
  public fullname : string = "";
  public pathImg : string = "";
  public pathDoc : string = "";

  constructor(
    private article : ArticleService,
    private userStore : UserStoreService,
    private auth : UserService,
    private toast : ToastrService
  ){}

  ngOnInit(): void {
    this.userStore.getFullNameFromStore().subscribe(res => {
      let fullNameFromToken = this.auth.getFullNameFormToken();
      this.fullname = res || fullNameFromToken;
    });

    this.getArticle(this.fullname);
  }

  getArticle(username:string) {
    this.article.getArticleOfStudent(username).subscribe(data => {
      this.lstArticles = data;
      this.pathImg = this.article.Img;
      this.pathDoc = this.article.doc;
    },
    error => {
      this.toast.error(error.error.message, 'Error', {
        timeOut: 3000,
        progressBar: true,
        positionClass: 'toast-top-center'
      });
    })
  }


}
