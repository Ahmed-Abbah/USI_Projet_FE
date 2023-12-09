import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {take} from "rxjs";
import {UserMenuToggleService} from "../../../_services/user-menu-toggle.service";
import {AppStateService} from "../../../_commons/_services/app-state.service";
import {MetierToQuestionsService} from "../../../_services/metier-to-questions.service";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent  implements OnInit{



  showMenu: boolean = false;


  constructor(public userMenuToggleSer : UserMenuToggleService,
              public appSatateService : AppStateService,
              public metierToQuestionsService : MetierToQuestionsService,
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

    this.metierToQuestionsService.modeMetier$.pipe(take(1)).subscribe({
      next : value => {
        this.metierToQuestionsService.setNomMetier("");
        this.metierToQuestionsService.setModeMetier(false);
        this.metierToQuestionsService.setModeQuestion(true);
      }
    })


    this.appSatateService.logout();

  }

  questionsButtonHandle() {

    this.metierToQuestionsService.modeMetier$.pipe(take(1)).subscribe({
      next : value => {
        this.metierToQuestionsService.setModeMetier(false);
        this.metierToQuestionsService.setModeQuestion(true);
      }
    })

    this.router.navigateByUrl("/employee/question");
  }

  ngOnInit(): void {

    this.metierToQuestionsService.modeMetier$.pipe(take(1)).subscribe({
      next : value => {
        this.metierToQuestionsService.setModeMetier(false);
        this.metierToQuestionsService.setModeQuestion(true);
      }
    })

  }


}
