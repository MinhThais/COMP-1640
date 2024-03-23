import { catchError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { UserService } from 'src/app/services/user.service';
import { CommentService } from 'src/app/services/comment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comment-adding',
  templateUrl: './comment-adding.component.html',
  styleUrls: ['./comment-adding.component.css']
})
export class CommentAddingComponent implements OnInit{
  public lstcomment : any = [];
  contributionID : number = 0;
  commentcontent : string = "";
  fullname : string = "";

  public deadline : boolean = true;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private userStore:UserStoreService,
    private auth:UserService,
    private comment:CommentService,
    private toast:ToastrService
  ){}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      this.contributionID = +params['id'];
      this.getComment(this.contributionID);
    });

    this.userStore.getFullNameFromStore().subscribe(res => {
      let getFullNameFormToken = this.auth.getFullNameFormToken();
      this.fullname = res || getFullNameFormToken;
    });
  }

  getComment(contribution_id:number){
    this.comment.getcomment(contribution_id).subscribe(data => {
      this.lstcomment = data;
    });
  }

  sendComment(){
    this.comment.addComment(this.commentcontent, this.fullname, this.contributionID).subscribe(res => {
      this.ngOnInit();
      this.commentcontent = "";
    },
    error => {
      this.toast.error(error.error.message, 'Error', {
        timeOut: 3000,
        progressBar: true,
        positionClass: 'toast-top-center'
      });
    });
  }

  deleteComment(comment_id:number){
    if(confirm("Are you sure to delete?")){
      this.comment.deletecomment(comment_id).subscribe(res => {
        this.ngOnInit();
      },
      error => {
        this.toast.error(error.error.message, "Error", {
          timeOut: 3000,
          progressBar: true,
          positionClass: 'toast-top-center'
        });
      });
    }
  }
}
