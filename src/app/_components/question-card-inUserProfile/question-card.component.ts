import { Component } from '@angular/core';

import { QuestionService } from '../../_services/question.service';
import {QuestionResponse} from "../../_models/QuestionResponse.module";

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent {
  title = 'fiscaConstra App';
  public questionResponses: QuestionResponse[] | undefined;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.getQuestions();
    console.log(this.questionResponses);
  }

  public getQuestions(): void {
    this.questionService.getQuestions().subscribe({
      next: (response) => {
        this.questionResponses = response;
      },
      error: (error) => {
        alert(error.message);
        console.log(error);
      }
  });
  }

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



}
