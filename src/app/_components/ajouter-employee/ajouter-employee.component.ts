import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserRequest} from "../../_models/UserRequest.module";
import {Fonction} from "../../_enums/Fonction.enum";
import {Router} from "@angular/router";
import {UserService} from "../../_services/user.service";
import {take} from "rxjs";
import {UserResponse} from "../../_models/UserResponse.module";
import {MetierToQuestionsService} from "../../_services/metier-to-questions.service";


@Component({
  selector: 'app-ajouter-employee',
  templateUrl: './ajouter-employee.component.html',
  styleUrls: ['./ajouter-employee.component.css']
})
export class AjouterEmployeeComponent implements OnInit{


  public fromSignUp !: FormGroup;
  public errorState : boolean = false;
  public errorMessage : string = "error";

  private user : UserRequest ={
    id : 0,
    nom : "",
    prenom : "",
    email: "",
    password :  "",
    fonction : Fonction.CHEF_D_ÉQUIPE,
    // isExits : false
  }

  constructor(private fb: FormBuilder,
              private router : Router,
              private userService : UserService,
              public metierToQuestionsService : MetierToQuestionsService) {
  }

  ngOnInit(): void {

    this.fromSignUp = this.fb.group({
      nom : this.fb.control("",[Validators.required]),
      prenom : this.fb.control("",[Validators.required]),

      email : this.fb.control("",[Validators.required]),
      emailConfirm :  this.fb.control("",[Validators.required]),

      password : this.fb.control("",[Validators.required]),
      passwordConfirm : this.fb.control("",[Validators.required]),

      fonction : this.fb.control("",[Validators.required]),

    })


    this.metierToQuestionsService.modeMetier$.pipe(take(1)).subscribe({
      next : value => {
        this.metierToQuestionsService.setNomMetier("");
        this.metierToQuestionsService.setModeMetier(false);
        this.metierToQuestionsService.setModeQuestion(true);
      }
    })

  }


  handleAjout() {
    /**
     * La recuperation des donnees
     */
    let email = this.fromSignUp.value.email.trim();
    let emailConfirm = this.fromSignUp.value.emailConfirm.trim();
    console.log(email);
    console.log(emailConfirm);


    let password = this.fromSignUp.value.password;
    let passwordConfirm = this.fromSignUp.value.passwordConfirm;




    if(email !== emailConfirm){

      console.log("11");
      this.errorState = true;
      this.errorMessage = "Verifiez la confirmation d'email"
      console.log(this.errorMessage );


    }else if(password !== passwordConfirm){

      console.log("22");
      this.errorState = true;
      this.errorMessage = "Verifiez la confirmation de mot de passe"
      // this.router.navigateByUrl(window.location.href);

    }else {


      this.user.nom = this.fromSignUp.value.nom;
      this.user.prenom = this.fromSignUp.value.prenom;


      this.user.email = email;
      this.user.password = password;


      this.user.fonction = Fonction[this.fromSignUp.value.fonction as keyof typeof Fonction];

      console.log(this.user.fonction);
      console.log(this.user.fonction);
      console.log(this.user.fonction);
      console.log(this.user.fonction);
      console.log(this.user.fonction);


      this.userService.register(this.user).pipe(take(1)).subscribe({

        next : (value : UserResponse) => {
          if(value.isExits){

            this.errorState = true;
            this.errorMessage = "Le compte avec cet email existe";
          }else {
            console.log("66");
            this.errorState = false;
            this.errorMessage = "";

            this.router.navigateByUrl("/employee");
          }
        }
      });

    }

  }

}
