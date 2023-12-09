import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserResponse} from "../../_models/UserResponse.module";
import {UserService} from "../../_services/user.service";


import {merge, of as observableOf, take} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MetierToQuestionsService} from "../../_services/metier-to-questions.service";

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit, AfterViewInit{





  public data : UserResponse[] = [];
  length = 200;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public uService : UserService,
              public  metierToQuestionsService : MetierToQuestionsService){}


  applyFilter(event: Event) {

  }

  ngAfterViewInit(){


    //this.dataSource.paginator = this.paginator;
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 16;
    this.paginator.hidePageSize = true;
    this.paginator.showFirstLastButtons = true


    console.log("R1 : ");

      merge(this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            this.isLoadingResults = true;
            return this.uService.getExperts(
              this.paginator.pageIndex,
            ).pipe(catchError(() => observableOf(null)));
          }),
          map(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = data === null;


            if (data === null) {
              return [];
            }

            if(data.length<this.paginator.pageSize){
              this.length = this.paginator.pageIndex * this.paginator.pageSize + data.length;
              this.paginator.hidePageSize=true;
            }

            console.log("PageSize : " + this.paginator.pageSize);
            console.log(data);
            return data;
          }),
        )
        .subscribe({
          next : data => {
            this.data = data;

            console.log("reservation apres: ");
            console.log(data);
          }
        });
      console.log("B2 : ");

  }

  ngOnInit(): void {

    // this.ngAfterViewInit();

    this.metierToQuestionsService.modeMetier$.pipe(take(1)).subscribe({
      next : value => {
        this.metierToQuestionsService.setNomMetier("");
        this.metierToQuestionsService.setModeMetier(false);
        this.metierToQuestionsService.setModeQuestion(true);
      }
    })
  }

}
