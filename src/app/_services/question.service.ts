import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {QuestionResponse} from "../_models/QuestionResponse.module";



@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiServiceUrl="http://localhost:8083";

  constructor(private http : HttpClient) {}

  public getQuestions():Observable<QuestionResponse[]>{
    return this.http.get<QuestionResponse[]>(`${this.apiServiceUrl}/question`) ;
  }


  public addQuestion(question : QuestionResponse):Observable<QuestionResponse>{
    return this.http.post<QuestionResponse>(`${this.apiServiceUrl}/question`,question) ;
  }

  public updateQuestion(questionId:number,question : QuestionResponse):Observable<QuestionResponse>{
    return this.http.put<QuestionResponse>(`${this.apiServiceUrl}/question/${questionId}`,question) ;
  }

  public deleteQuestion(questionId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/question/${questionId}`) ;
  }
}
