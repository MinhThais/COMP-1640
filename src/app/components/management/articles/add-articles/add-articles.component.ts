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
  constructor(
    private fb: FormBuilder,
    private auth: UserService,
    private article: ArticleService
    ){
  }

  ngOnInit(): void {
    this.addArticleForm = this.fb.group({
      contribution_title:['', Validators.required]
    })
  }

  onCreate(){
    if(this.addArticleForm.valid){
        this.article.addNewArticle(this.filetoUpload, this.addArticleForm.get('contribution_title')?.value).subscribe(
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

  handleFileInput(event: any){
    this.filetoUpload = event.target.files[0];
  }

}
