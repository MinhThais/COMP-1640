import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/services/article.service';
import { CommentService } from 'src/app/services/comment.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.css']
})
export class PublicationDetailComponent implements OnInit{
  public lstcomment : any = [];
  contributionID : number = 0;
  commentcontent : string = "";
  fullname : string = "";
  userID: any;

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

    // this.userStore.getFullNameFromStore().subscribe(res => {
    //   let getFullNameFormToken = this.auth.getFullNameFormToken();
    //   this.fullname = res || getFullNameFormToken;
    // });

    // this.auth.getUserID(this.fullname).subscribe(res=>{
    //   this.userID = res;
    // })
  }

  getComment(contribution_id:number){
    this.comment.getcomment(contribution_id).subscribe(data => {
      this.lstcomment = data;
    });
  }
}
