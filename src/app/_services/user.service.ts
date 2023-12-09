import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MetierResponse} from "../_models/MetierResponse.module";
import {UserResponse} from "../_models/UserResponse.module";
import {UserRequest} from "../_models/UserRequest.module";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private href: string = 'http://localhost:8083/employee';

  constructor(private http : HttpClient) { }

  public getExperts(page: number) : Observable<UserResponse[]>{
    const  getExpertsUrl:string = `${this.href}/expert?page=${page}`;
    return this.http.get<UserResponse[]>(getExpertsUrl);
  }


  public getEmployees(page: number) : Observable<UserResponse[]>{
    const  getEmployeesUrl:string = `${this.href}?page=${page}`;
    return this.http.get<UserResponse[]>(getEmployeesUrl);
  }


  register(user : UserRequest) : Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.href}`, user);
  }



}
