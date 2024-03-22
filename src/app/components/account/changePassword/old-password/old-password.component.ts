import { Component } from '@angular/core';

@Component({
  selector: 'app-old-password',
  templateUrl: './old-password.component.html',
  styleUrls: ['./old-password.component.css']
})
export class OldPasswordComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";


  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
}
