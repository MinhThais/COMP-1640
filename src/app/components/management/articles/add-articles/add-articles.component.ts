import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent {
  addArticleForm!: FormGroup
  filetoUpload!: any;
  fileImg: any;
  fullname = "";
  constructor(
    private fb: FormBuilder,
    private auth: UserService,
    private article: ArticleService,
    private userStore:UserStoreService
    ){
  }

  ngOnInit(): void {
    this.userStore.getFullNameFromStore().subscribe(res => {
      let fullNameFromToken = this.auth.getFullNameFormToken();
      this.fullname = res || fullNameFromToken;
    });

    this.addArticleForm = this.fb.group({
      contribution_title:['', Validators.required]
    })
  }

  onCreate(){
    if(this.addArticleForm.valid){
      const formData:FormData = new FormData();
      formData.append('uploadFile', this.filetoUpload, this.filetoUpload.name);
      formData.append('username',this.fullname);
      formData.append('title',this.addArticleForm.get('contribution_title')?.value);
      formData.append('uploadImage', this.fileImg, this.fileImg.name);

      console.log(formData);
      console.log(this.addArticleForm.get('contribution_title')?.value);
      this.article.addNewArticle(formData).subscribe(
        (res)=>{
          console.log("success")
        },
        (err) =>{
          console.log("err")
        }
      );
    }
    else{
      Object.keys(this.addArticleForm.controls).forEach((field) => {
        const control = this.addArticleForm.get(field);
        if (control instanceof FormControl) {
          control.markAsDirty({ onlySelf: true });
        }
      });
    }
  }

  uploadImage(event: any){
    const file = event.target.files;
    if(file && file.length > 0){
      this.fileImg = event.target.files[0];
    }
  }

  handleFileInput(event: any){
    const file = event.target.files;

    if(file && file.length > 0){
      this.filetoUpload = event.target.files[0];

      // this.article.uploadImage(formData).subscribe(res =>{
      //   alert(res.message);
      // },
      // error => {
      //   alert(error.error.message);
      // })
    }
  }

}
