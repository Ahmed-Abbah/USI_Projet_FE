import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './_components/sidenav/sidenav.component';
import { LogoComponent } from './_components/_navbar/logo/logo.component';
import { LoginComponent } from './_commons/_components/login/login.component';
import { EmployeeTemplateComponent } from './_components/employee-template/employee-template.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { MetiersComponent } from './_components/metiers/metiers.component';
import { ExpertsComponent } from './_components/experts/experts.component';
import { FooterComponent } from './_components/footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import { QuestionsComponent } from './_components/questions/questions.component';
import { QuestionDetailsComponent } from './_components/question-details/question-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    LogoComponent,
    LoginComponent,
    EmployeeTemplateComponent,
    DashboardComponent,
    QuestionsComponent,
    MetiersComponent,
    ExpertsComponent,
    FooterComponent,
    QuestionDetailsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
