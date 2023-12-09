import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./_commons/_components/login/login.component";
import {EmployeeTemplateComponent} from "./_components/employee-template/employee-template.component";
import {DashboardComponent} from "./_components/dashboard/dashboard.component";
import {QuestionsComponent} from "./_components/questions/questions.component";
import {MetiersComponent} from "./_components/metiers/metiers.component";
import {ExpertsComponent} from "./_components/experts/experts.component";
import { QuestionDetailsComponent } from './_components/question-details/question-details.component';
import {AuthenticationGuard} from "./_commons/_guards/authentication.guard";
import {EmployeesComponent} from "./_components/employees/employees.component";
import {AjouterEmployeeComponent} from "./_components/ajouter-employee/ajouter-employee.component";


const routes: Routes = [

  {path: '', redirectTo : "employee", pathMatch:"full"},



  {path: 'login', component: LoginComponent},



  /**
   * C'est simulaire pour les reservations??????
   */
  // {
  //   path: 'employee', component: EmployeeTemplateComponent, canActivate : [AuthenticationGuard] ,children : [
  //
  //     {path: '', component : DashboardComponent},
  //     {path: 'today', component : AujourdhuiComponent},
  //     {path: 'worktime', component : WorktimeComponent},
  //     {path : 'humeur', component : HumeurComponent },
  //     {path : 'logout', component : LogoutComponent}
  //
  //   ]
  // },

  {
    path: 'employee', component: EmployeeTemplateComponent ,canActivate : [AuthenticationGuard],children : [

      {path: '', component : EmployeesComponent},
      {path: 'ajout', component : AjouterEmployeeComponent},


      // {path: 'home', component : DashboardComponent},
      {path: 'question', component : QuestionsComponent},
      {path: 'question/:questionId', component : QuestionDetailsComponent},
      {path: 'metier', component : MetiersComponent},
      {path : 'expert', component : ExpertsComponent },

    ]
  },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
