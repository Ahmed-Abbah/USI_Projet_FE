import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {QuestionResponse} from "../_models/QuestionResponse.module";
import {QuestionRequest} from "../_models/QuestionRequest.module";



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

  public updateQuestion(questionId:number,question : QuestionResponse):Observable<QuestionResponse>{
    return this.http.put<QuestionResponse>(`${this.apiServiceUrl}/question/${questionId}`,question) ;
  }

  public deleteQuestion(questionId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/question/${questionId}`) ;
  }


}
