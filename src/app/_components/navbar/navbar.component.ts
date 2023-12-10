import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppStateService} from "../../_commons/_services/app-state.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserRequest} from "../../_models/UserRequest.module";
import {Fonction} from "../../_enums/Fonction.enum";
import {Router} from "@angular/router";
import {UserService} from "../../_services/user.service";
import {take} from "rxjs";
import {UserResponse} from "../../_models/UserResponse.module";
import {QuestionRequest} from "../../_models/QuestionRequest.module";
import {MetierRequest} from "../../_models/MetierRequest.module";
import {QuestionService} from "../../_services/question.service";
import {QuestionResponse} from "../../_models/QuestionResponse.module";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit{



  public fromSignUp !: FormGroup;
  public errorState : boolean = false;
  public errorMessage : string = "error";

  private question : QuestionRequest ={
    id : 0,
    question : "",
    metier : {
      id : 0,
      nom : "",
      description : ""
    }
  }



  constructor(private fb: FormBuilder,
              private router : Router,
              private userService : UserService,
              public appSatateService : AppStateService,
              private questionService: QuestionService) {
  }

  ngAfterViewInit() {
  }


  ngOnInit(): void {

    this.fromSignUp = this.fb.group({
      question : this.fb.control("",[Validators.required]),
      metierNom : this.fb.control("",[Validators.required]),
    })

  }


  handleAjout() {
    /**
     * La recuperation des donnees
     */


      this.question.question = this.fromSignUp.value.question;
      this.question.metier.nom = this.fromSignUp.value.metierNom;


      this.questionService.addQuestion(this.question).pipe(take(1)).subscribe({

        next : (value : QuestionResponse) => {
            this.router.navigateByUrl("/employee/question");
        }
      });

  }


}
