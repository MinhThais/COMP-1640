import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-comment',
  templateUrl: './student-comment.component.html',
  styleUrls: ['./student-comment.component.css']
})
export class StudentCommentComponent implements OnInit{
  articleID: number = 0;
  userName : string = "";
  contribution: any
  htmlContent: any

  constructor(
    private userStoreService:UserStoreService,
    private userService:UserService,
    private activatedRouter: ActivatedRoute,
    private articleService: ArticleService
  ) {
  }

  ngOnInit(): void {
    this.userStoreService.getFullNameFromStore().subscribe(res => {
      let userNameFromToken = this.userService.getFullNameFormToken();
      this.userName = res || userNameFromToken;
    });

    this.activatedRouter.params.subscribe((params) => {
      this.articleID = +params['id'];
      this.GetArticleByUsername(this.userName,this.articleID);
    });
  }

  GetArticleByUsername(userName: string, contribution_id: number) {
    this.articleService.getArticleOfStudent(userName, contribution_id).subscribe((data: any) => {
      this.contribution = data.result;
      this.htmlContent = this.contribution.contribution_content;
      // console.table(this.contribution);
    });
  }
}
