import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionResponse } from 'src/app/_models/QuestionResponse.module';
import { QuestionService } from 'src/app/_services/question.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent {
  question : QuestionResponse | any ;

  constructor(
    private route : ActivatedRoute,
     private router :Router,
    private questionService:QuestionService
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

  

  
}
