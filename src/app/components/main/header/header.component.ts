import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareService } from 'src/app/services/share.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public fullname : any = "";
  public role:string = "";
  public n : string = "none";
  public m : string = "block";

  private subscription!: Subscription;

  constructor(private userStore:UserStoreService, private auth:UserService, private shareService : ShareService){}

  ngOnInit(): void {
    this.userStore.getFullNameFromStore().subscribe(res => {
      let fullNameFromToken = this.auth.getFullNameFormToken();
      this.fullname = res || fullNameFromToken;
    });

    this.userStore.getRoleFromStore().subscribe(res => {
      let roleFromToken = this.auth.getRoleFromToken();
      this.role = res || roleFromToken;

      if(this.role != undefined){
        this.m = "none";
        this.n = "block";
      }
    });

    this.userStore.setRoleForStore(this.role);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  callTest(): void {
    this.shareService.triggerLoad();
  }

  signOut(){
    this.auth.signOut();
    this.n = "none";
    this.m = "block";
    this.role = "";
    this.fullname = "";
    this.userStore.setRoleForStore(this.role);
    this.callTest();
  }

}
