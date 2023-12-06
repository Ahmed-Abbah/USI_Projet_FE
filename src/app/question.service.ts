import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './models/Question.module';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiServiceUrl="http://localhost:8083";

  constructor(private http : HttpClient) {}

  public getQuestions():Observable<Question[]>{
    return this.http.get<Question[]>(`${this.apiServiceUrl}/question/list`) ;
  }
  

  public addQuestion(question : Question):Observable<Question>{
    return this.http.post<Question>(`${this.apiServiceUrl}/question/add`,question) ;
  }

  public updateQuestion(question : Question):Observable<Question>{
    return this.http.put<Question>(`${this.apiServiceUrl}/question/update`,question) ;
  }

  public deleteQuestion(questionId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/question/delete/${questionId}`) ;
  }
}
