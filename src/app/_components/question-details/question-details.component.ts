import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionResponse } from 'src/app/_models/QuestionResponse.module';
import { QuestionService } from 'src/app/_services/question.service';
import {take} from "rxjs";
import {MetierToQuestionsService} from "../../_services/metier-to-questions.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionRequest} from "../../_models/QuestionRequest.module";
import {ReponseRequest} from "../../_models/ReponseRequest.module";
import {ReponseResponse} from "../../_models/ReponseResponse.module";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent {
  question : QuestionResponse | any ;


  public fromResponse !: FormGroup;

  private reponse : ReponseRequest ={
    id : 0,
    reponse : "",
  }




  constructor(
    private fb: FormBuilder,
    private route : ActivatedRoute,
     private router :Router,
    private questionService:QuestionService,
    public mToqService: MetierToQuestionsService
  ){}



  ngOnInit(): void {
    this.questionService.getQuestion(Number(this.route.snapshot.paramMap.get('questionId'))).subscribe({
      next: (response) => {
        this.question = response;
        console.log(this.question);
      },
      error: (error) => {
        alert(error.message);
        console.log(error);
      }
    });


    this.fromResponse = this.fb.group({
      reponse : this.fb.control("",[Validators.required]),
    })



    this.mToqService.modeMetier$.pipe(take(1)).subscribe({
      next : value => {
        this.mToqService.setNomMetier("");
        this.mToqService.setModeMetier(false);
        this.mToqService.setModeQuestion(true);
      }
    })
  }

  getCurrentDate(): string {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    return new Intl.DateTimeFormat('en-US', options).format(currentDate);
  }


  applyFilter($event: KeyboardEvent) {

  }










  handleAjoutReponse(id : number) {

    this.reponse.reponse = this.fromResponse.value.reponse;

    this.questionService.addReponse(this.reponse, this.question.id).pipe(take(1)).subscribe({

      next : (value : ReponseResponse) => {
        // this.router.navigateByUrl("/employee/question/"+id);
        // this.router.navigate(['employee/question/',id]);
        window.location.reload();
      }
    });




  }
}
