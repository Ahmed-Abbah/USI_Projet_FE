import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{


  // constructor(
  //   private appStateService : AppStateService,
  //             public router : Router) {}
  //
  //
  // title!: string;
  //
  ngOnInit(): void {
    // this.appStateService.loadTokenFromLocalStorage();
  }


}
