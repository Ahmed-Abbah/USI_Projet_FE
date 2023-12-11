import {AfterViewInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionResponse } from 'src/app/_models/QuestionResponse.module';
import { UserResponse } from 'src/app/_models/UserResponse.module';

import { QuestionService } from 'src/app/_services/question.service';
import {take} from "rxjs";
import {MetierToQuestionsService} from "../../_services/metier-to-questions.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionRequest} from "../../_models/QuestionRequest.module";
import {ReponseRequest} from "../../_models/ReponseRequest.module";
import {ReponseResponse} from "../../_models/ReponseResponse.module";
import {AppStateService} from "../../_commons/_services/app-state.service";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent  implements OnInit, AfterViewInit{
  question : QuestionResponse | any ;

  showVoteButton : Boolean = false;
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
    public mToqService: MetierToQuestionsService,
    public appState:AppStateService
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



  handleAjoutVote(id : number) {
    this.questionService.voteQuestion(this.question.id).pipe(take(1)).subscribe({

      next : (value : any) => {
        // this.router.navigateByUrl("/employee/question/"+id);
        // this.router.navigate(['employee/question/',id]);
        window.location.reload();
      }
    });

  }


  // userHasVoted(user: UserResponse): boolean {
  //   // Check if there's any vote for the current question in the user's votes
  //
  //   const hasVoted = user.vote.some(vote => vote.question.id === this.question.id);
  //
  //   return hasVoted;
  // }


  handleVotingLogic(): void {
    if (this.question.vote != null) {
      // Case where question has votes
      const userHasVoted = this.question.vote.votedUsers.some(
        (votedUser: any) => votedUser.email === this.appState.authState.email
      );

      if (userHasVoted) {
        // User has voted
        console.log('User has voted');
        this.showVoteButton=false;
      } else {
        // User has not voted
        console.log('User has not voted');
        this.showVoteButton=true;
      }
    } else {
      // Case where question has no votes
      console.log('Question has no votes');
      this.showVoteButton=true;
    }
  }

  ngAfterViewInit(): void {
    this.handleVotingLogic();
  }



}
