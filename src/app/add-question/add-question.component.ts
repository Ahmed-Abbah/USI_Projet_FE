import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  addQuestionForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private questionService:QuestionService) {
    this.addQuestionForm = this.formBuilder.group({
      question: [''],
      type: ['new'],
      user: ['']
    });
  }

  addQuestion() {
    const questionData = this.addQuestionForm.value;
    this.questionService.addQuestion(questionData).subscribe({
      next: (response) => {
        alert("Added successfuly");
        location.reload();
      },
      error: (error) => {
        alert(error.message);
        console.log(error);
      }
    });
  }
}
