import { Injectable } from '@angular/core';
import {SortDirection} from "@angular/material/sort";
import {Observable} from "rxjs";
import {MetierResponse} from "../_models/MetierResponse.module";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MetierService {


  private href: string = 'http://localhost:8083/employee';

  constructor(private http : HttpClient) { }

  public getMetiers(page: number) : Observable<MetierResponse[]>{
    const  getMetiersUrl:string = `${this.href}/metiers?page=${page}`;
    return this.http.get<MetierResponse[]>(getMetiersUrl);
  }


}
