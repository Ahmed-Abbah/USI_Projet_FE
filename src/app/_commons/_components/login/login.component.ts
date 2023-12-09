import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AppStateService} from "../../_services/app-state.service";
import {Router} from "@angular/router";
import {AuthService} from "../../_services/auth.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  public fromLogin !: FormGroup;

  constructor(private fb: FormBuilder,
              private authService : AuthService,
              private appStateService : AppStateService,
              private router : Router) {
  }


  ngOnInit(): void {

    this.fromLogin = this.fb.group({
      email : this.fb.control(""),
      password : this.fb.control("")
    })

  }


  handleLogin() {

    let email = this.fromLogin.value.email;
    let password = this.fromLogin.value.password;

    this.authService.login(email, password).subscribe({

      next: data => {
        this.appStateService.loadProfile(data);

        /**
         * Les cas d'un employee et d'un admin
         */


        // if(this.appStateService.authState.roles.toString() === Role[Role.EMPLOYEE]){

        this.router.navigateByUrl("/employee/home");
        // }else {
        //this.router.navigateByUrl("/admin");
        // console.log(("Le role n'est pas correct"));
        // }

      },
      error: err => {
        console.log(err);
      }
    })
  }


}
