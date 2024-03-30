import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadService } from './services/load.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'ProjectComp1640';
  isShow:boolean = false
  // private subscription!: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private router: Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isShow = this.shouldShowHeader();
      }
    });
  }
  


  ngOnInit() {


    

  // setTimeout(() => { this.ngOnInit() }, 0);
  //   this.isshowHeadFoot()
    // if(window.location.href == "http://localhost:4200/"){
    //   this.isShow = false;
    // }
    // else{
    //   this.isShow = true;
    // }
  }

  shouldShowHeader(): boolean {
    // Xác định xem header có nên hiển thị dựa trên logic của bạn.
    // Ví dụ:
    const currentPath = this.router.url;
    return currentPath !== '/';
  }

  // isshowHeadFoot(){
  //   const currentPath = this.activatedRoute.firstChild?.snapshot.routeConfig?.path;
  //     this.isShow = true
  //     if(currentPath == ''){
  //       this.isShow = false
  //     }
  //     // window.location.reload()
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  // callLoad(): void {
  //   this.load.triggerLoad();
  // }



  
}
