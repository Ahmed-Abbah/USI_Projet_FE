import {AfterViewInit, Component, OnInit} from '@angular/core';

import { QuestionService } from '../../_services/question.service';
import {QuestionResponse} from "../../_models/QuestionResponse.module";
import { Router } from '@angular/router';
import {MetierToQuestionsService} from "../../_services/metier-to-questions.service";
import {take} from "rxjs";

@Component({
  selector: 'app-question-card',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})


export class QuestionsComponent implements OnInit, AfterViewInit{
  title = 'fiscaConstra App';

  public questionResponses: QuestionResponse[] | undefined;

  public questionResponsesByMetier: QuestionResponse[] | undefined;


  constructor(private questionService: QuestionService,
              private router: Router,
              public  metierToQuestionsService : MetierToQuestionsService) {

  }

  ngOnInit() {

    this.getQuestions();
    console.log("1 : ");
    console.log(this.questionResponses);
    console.log("1 : ");
    console.log(this.questionResponsesByMetier);
  }

  public getQuestions(): void {



    this.metierToQuestionsService.nomMetier$.subscribe({
      next: (nom) => {

        let nomMetier : string = nom;
        console.log("test nom metier" + nomMetier);

        this.questionService.getQuestions(nomMetier).subscribe({
          next: (response) => {
            this.questionResponses = response;
          },
          error: (error) => {
            alert(error.message);
            console.log(error);
          }
        });
      },
      error: (error) => {
        alert(error.message);
        console.log(error);
      }

    });





  }



  // public getQuestionsByMetier(): void {
  //
  //
  //   this.metierToQuestionsService.nomMetier$.subscribe({
  //     next: (nom) => {
  //
  //       let nomMetier : string = nom;
  //       console.log("test nom metier" + nomMetier);
  //
  //       if(nomMetier != ""){
  //         this.questionService.getQuestionsByMetier(nomMetier).subscribe({
  //
  //           next: (response) => {
  //             this.questionResponsesByMetier = response;
  //           },
  //           error: (error) => {
  //             alert(error.message);
  //             console.log(error);
  //           }
  //         });
  //       }
  //
  //
  //
  //     },
  //     error: (error) => {
  //       alert(error.message);
  //       console.log(error);
  //     }
  //   });
  //
  //
  // }


  public deleteEmployee(id: number) {
    // You should call the deleteEmployees method with the appropriate ID from your service.
    // Assuming your service has a deleteEmployee method, you would call it like this:
    this.questionService.deleteQuestion(id).subscribe({
      next: (response) => {
        location.reload();
      },
      error: (error) => {
        alert(error.message);
        console.log(error);
      }
    });
  }

  public goToQuestion(questionId:number){
    this.router.navigate(['employee/question/',questionId]);
  }


  applyFilter($event: KeyboardEvent) {

  }

  ngAfterViewInit(): void {


    this.getQuestions();
    console.log("2 : ");
    console.log(this.questionResponses);
    console.log("2 : ");
    console.log(this.questionResponsesByMetier);


  }



}
