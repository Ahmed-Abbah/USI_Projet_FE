import {Component, OnInit} from '@angular/core';
import {take} from "rxjs";
import {UserService} from "../../_services/user.service";
import {MetierToQuestionsService} from "../../_services/metier-to-questions.service";

@Component({
  selector: 'app-employee-template',
  templateUrl: './employee-template.component.html',
  styleUrls: ['./employee-template.component.css']
})
export class EmployeeTemplateComponent implements OnInit{



  constructor(public metierToQuestionsService : MetierToQuestionsService) {}


  ngOnInit(): void {

    // this.ngAfterViewInit();

    this.metierToQuestionsService.modeMetier$.pipe(take(1)).subscribe({
      next : value => {
        this.metierToQuestionsService.setNomMetier("");
        this.metierToQuestionsService.setModeMetier(false);
        this.metierToQuestionsService.setModeQuestion(true);
      }
    })
  }



}
