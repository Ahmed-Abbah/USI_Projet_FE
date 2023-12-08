import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {take} from "rxjs";
import {UserMenuToggleService} from "../../../_services/user-menu-toggle.service";
import {AppStateService} from "../../../_commons/_services/app-state.service";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {



  showMenu: boolean = false;


  constructor(public userMenuToggleSer : UserMenuToggleService,
              public appSatateService : AppStateService,
              private router : Router) {
  }



  toggleOpen() {
    this.userMenuToggleSer.isOpen$.pipe((take(1))).subscribe({
      next : value => {
        this.userMenuToggleSer.setisOpen(!value);
      }
    })
  }


  logoutButtonHandle() {
    this.appSatateService.logout();
  }

  questionsButtonHandle() {
    this.router.navigateByUrl("/employee/questions");
  }


}
