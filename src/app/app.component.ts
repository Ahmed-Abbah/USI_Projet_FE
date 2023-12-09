import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppStateService} from "./_commons/_services/app-state.service";
import {take} from "rxjs";
import {MetierToQuestionsService} from "./_services/metier-to-questions.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{


  constructor(
    private appStateService : AppStateService,
    public metierToQuestionsService : MetierToQuestionsService,
    public router : Router) {}


  title!: string;

  ngOnInit(): void {


    this.metierToQuestionsService.modeMetier$.pipe(take(1)).subscribe({
      next : value => {
        this.metierToQuestionsService.setNomMetier("");
        this.metierToQuestionsService.setModeMetier(false);
        this.metierToQuestionsService.setModeQuestion(true);
      }
    })

    this.appStateService.loadTokenFromLocalStorage();
  }


}
