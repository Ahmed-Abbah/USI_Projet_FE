import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MetierToQuestionsService {


  private modeMetierSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public modeMetier$ : Observable<boolean> = this.modeMetierSubject.asObservable();
  setModeMetier(modeStatus : boolean){
    this.modeMetierSubject.next(modeStatus);
  }



  private modeQuestionSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public modeQuestion$ : Observable<boolean> = this.modeQuestionSubject.asObservable();
  setModeQuestion(modeStatus : boolean){
    this.modeQuestionSubject.next(modeStatus);
  }


  private nomMetierSubject : BehaviorSubject<string> = new BehaviorSubject<string>("");
  public nomMetier$ : Observable<string> = this.nomMetierSubject.asObservable();
  setNomMetier(nomMetier : string){
    this.nomMetierSubject.next(nomMetier);
  }
  constructor() { }
}
