import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from '@angular/material/sort';




import {merge, of as observableOf, take} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';



import {MetierResponse} from "../../_models/MetierResponse.module";
import {MetierService} from "../../_services/metier.service";
import {MetierToQuestionsService} from "../../_services/metier-to-questions.service";
import {Router} from "@angular/router";





@Component({
  selector: 'app-metiers',
  templateUrl: './metiers.component.html',
  styleUrls: ['./metiers.component.css']
})
export class MetiersComponent implements OnInit,AfterViewInit{

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;


  public data : MetierResponse[] = [];
  length = 200;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;


  constructor(public mService : MetierService,
              public mToqService : MetierToQuestionsService,
              public router : Router) {}


  applyFilter(event: Event) {

  }




  ngAfterViewInit(){


    //this.dataSource.paginator = this.paginator;
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 16;
    this.paginator.hidePageSize = true;
    this.paginator.showFirstLastButtons = true


    console.log("R1 : ");
    // If the user changes the sort order, reset back to the first page.


    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          console.log("Pour voir la valeur de  sort.active");
          return this.mService.getMetiers(
            this.paginator.pageIndex
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

    this.mToqService.modeMetier$.pipe(take(1)).subscribe({
      next : value => {
        this.mToqService.setNomMetier("");
        this.mToqService.setModeMetier(false);
        this.mToqService.setModeQuestion(true);
      }
    })


  }


  meteirToQuestion(nom: string) {


    this.mToqService.modeMetier$.pipe(take(1)).subscribe({
      next : value => {

        this.mToqService.setNomMetier(nom);


        this.mToqService.setModeMetier(true);
        this.mToqService.setModeQuestion(false);

        console.log(nom);
        console.log(nom);
        console.log(nom);
        console.log(nom);
        console.log(nom);
        console.log(nom);
        console.log(nom);
        console.log(nom);


        this.router.navigateByUrl("/employee/question");
      }
    })
  }
}
