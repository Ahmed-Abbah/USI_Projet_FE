import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {QuestionResponse} from "../_models/QuestionResponse.module";
import {QuestionRequest} from "../_models/QuestionRequest.module";
import {VoteResponse} from "../_models/VoteResponse.module";


import {ReponseRequest} from "../_models/ReponseRequest.module";
import {ReponseResponse} from "../_models/ReponseResponse.module";




@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiServiceUrl="http://localhost:8083/employee";

  constructor(private http : HttpClient) {}

  public getQuestion(questionId:number):Observable<QuestionResponse>{
    return this.http.get<QuestionResponse>(`${this.apiServiceUrl}/question/${questionId}`) ;
  }

  public getQuestions(nomMetier : string):Observable<QuestionResponse[]>{
    return this.http.get<QuestionResponse[]>(`${this.apiServiceUrl}/question?nomMetier=${nomMetier}`) ;
  }

  //
  // public getQuestionsByMetier(nomMetier : string):Observable<QuestionResponse[]>{
  //   return this.http.get<QuestionResponse[]>(`${this.apiServiceUrl}/question?nomMetier=${nomMetier}`) ;
  // }


  public addQuestion(question : QuestionRequest):Observable<QuestionResponse>{
    return this.http.post<QuestionResponse>(`${this.apiServiceUrl}/question`,question) ;
  }



  public addReponse(reponse : ReponseRequest, id: number):Observable<ReponseResponse>{
    return this.http.post<ReponseResponse>(`${this.apiServiceUrl}/reponse?id=${id}`,reponse) ;
  }



  public updateQuestion(questionId:number,question : QuestionResponse):Observable<QuestionResponse>{
    return this.http.put<QuestionResponse>(`${this.apiServiceUrl}/question/${questionId}`,question) ;
  }

  public deleteQuestion(questionId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/question/${questionId}`);
  }

  public voteQuestion(questionId: number): Observable<VoteResponse> {
    return this.http.put<VoteResponse>(`${this.apiServiceUrl}/vote?id=${questionId}`,{});
  }




}
