import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserResponse} from "../../_models/UserResponse.module";
import {SelectionModel} from "@angular/cdk/collections";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserService} from "../../_services/user.service";
import {catchError, map, startWith, switchMap} from "rxjs/operators";
import {merge, of as observableOf, take} from "rxjs";
import {MetierToQuestionsService} from "../../_services/metier-to-questions.service";
import {Router} from "@angular/router";
import {UserRequest} from "../../_models/UserRequest.module";
import {Fonction} from "../../_enums/Fonction.enum";
import {Location} from "@angular/common";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements  OnInit,AfterViewInit{


  public data : UserResponse[] = [];


  length = 200;
  isLoadingResults = true;
  isRateLimitReached = false;



  displayedColumns: string[] = ['Nom','Prenom', 'Email','Poste', 'Questions','Reponses', 'Votes', 'Status', 'Actions'];


  selection = new SelectionModel<UserResponse>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public userService: UserService,
              public metierToQuestionsService : MetierToQuestionsService,
              public router: Router,
              private location: Location ) {}





  ngAfterViewInit() {

    //this.dataSource.paginator = this.paginator;
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
    this.paginator.hidePageSize = true;
    this.paginator.showFirstLastButtons = true


    console.log("B1 : ");



    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.userService.getEmployees(
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

          return data;
        }),
      )
      .subscribe({
        next : data => {
          this.data = data;
          console.log("apres : ");
          console.log(data);
        }
      });
    console.log("B2 : ");

  }





  loadWorkTimeData() {

    this.userService.getEmployees(
      this.paginator.pageIndex
    ).pipe(
      catchError(() => observableOf(null))
    ).subscribe({
      next: data => {
        this.length = this.length - 1;
        this.isLoadingResults = false;
        this.isRateLimitReached = data === null;


        if (data !== null) {
          if (this.data.length === 0 && this.paginator.pageIndex > 0) {
            this.paginator.pageIndex = this.paginator.pageIndex - 1;
          }
          this.data = data;
        }
      }
    });

  }


  doExpert(element : UserResponse) {

    let userRequest : UserRequest ={

      id: element.id,
      email: element.email,
      password: "",
      nom: element.nom,
      prenom: element.prenom,
      fonction: Fonction.FONCTION_1 //Non juste???????????????????????
    };

    this.userService.doExpert(element.id, userRequest).subscribe({
      next: (response) => {
        // this.router.navigateByUrl("employee")
        window.location.reload();
      },
      error: (error) => {
        console.log(error);
      }
    });


  }

  editUser(element : UserResponse) {

  }

  deleteUser(element : UserResponse) {

  }
  //
  // applyFilter($event: KeyboardEvent) {
  //
  // }

  applyFilter(event: Event) {

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
