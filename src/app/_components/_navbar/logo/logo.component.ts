import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {take} from "rxjs";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {



  constructor(private router : Router) {}


  backHome() {
        //this.router.navigateByUrl("/home")
  }

}
