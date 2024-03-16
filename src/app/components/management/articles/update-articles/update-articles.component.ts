import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-articles',
  templateUrl: './update-articles.component.html',
  styleUrls: ['./update-articles.component.css']
})
export class UpdateArticlesComponent {
  updateArticleForm!: FormGroup
  isChecked: boolean = true;

  constructor(
    private fb: FormBuilder,
    private auth: UserService
    ){
  }

  ngOnInit(): void {
    this.updateArticleForm = this.fb.group({
      contribution_title:['', Validators.required],
      contribution_submition_date:['', Validators.required]
    })
  }

  onCreate(){
    if(this.updateArticleForm.valid){
        this.auth.createUser(this.updateArticleForm).subscribe(
        (res)=>{
          console.log("success")
        },
        (err) =>{
          console.log("err")
        }
      );
    }
    else{
      Object.keys(this.updateArticleForm.controls).forEach((field) => {
        const control = this.updateArticleForm.get(field);
        if (control instanceof FormControl) {
          control.markAsDirty({ onlySelf: true });
        } 
      });
    }
  }

   // checkbox
   toggleButton() {
    // Toggle button's disabled state based on checkbox state
    this.isChecked = !this.isChecked
    this.isChecked ? this.enableButton() : this.disableButton() ;
  }

  disableButton() {
    // Disable the button
    const button = document.getElementById('btn-Confirm') as HTMLButtonElement;
    button.disabled = true;
  }

  enableButton() {
    // Enable the button
    const button = document.getElementById('btn-Confirm') as HTMLButtonElement;
    button.disabled = false;
  }
}
