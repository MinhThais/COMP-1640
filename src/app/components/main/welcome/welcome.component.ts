import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  display: string ='block'

ngOnInit(): void {

}

onStart(){
  this.display = 'none';
}

}


