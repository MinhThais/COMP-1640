import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadService } from './services/load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectComp1640';
  isShow:boolean = false
  private subscription!: Subscription;
  constructor(private load:LoadService){}

  ngOnInit() {
    setTimeout(() => { this.ngOnInit() }, 0);
    if(window.location.href == "http://localhost:4200/"){
      this.isShow = false;
    }
    else{
      this.isShow = true;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  callLoad(): void {
    this.load.triggerLoad();
  }
}
