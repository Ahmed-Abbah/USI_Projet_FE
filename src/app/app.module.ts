import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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

import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";


import {MatButtonModule} from '@angular/material/button';




import { LeafletModule } from '@asymmetrik/ngx-leaflet';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MaterialFileInputModule} from "ngx-material-file-input";
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSortModule} from '@angular/material/sort';
import { NgChartsModule } from 'ng2-charts';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbAccordionModule} from "mdb-angular-ui-kit/accordion";
import {MdbModalModule} from "mdb-angular-ui-kit/modal";
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";

import {DateRangePickerModule} from "@syncfusion/ej2-angular-calendars";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ToastrModule} from "ngx-toastr";
import {MatCardModule} from "@angular/material/card";
import { UserMenuComponent } from './_components/_navbar/user-menu/user-menu.component';
import { AvatarComponent } from './_components/_navbar/avatar/avatar.component';
import { MenuItemComponent } from './_components/_navbar/menu-item/menu-item.component';
import {AppHttpInterceptor} from "./_commons/_interceptors/app-http.interceptor";
import {DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter} from "@angular/material/core";
import { EmployeesComponent } from './_components/employees/employees.component';
import { AjouterEmployeeComponent } from './_components/ajouter-employee/ajouter-employee.component';




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

    QuestionDetailsComponent,

    UserMenuComponent,
    AvatarComponent,
    MenuItemComponent,
    EmployeesComponent,
    AjouterEmployeeComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    LeafletModule,
    MatSelectModule,
    MaterialFileInputModule,
    CdkTableModule,
    CdkTreeModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    NgChartsModule,
    FontAwesomeModule,

    MdbCheckboxModule,
    MdbFormsModule,
    MdbAccordionModule,
    MdbModalModule,
    MdbCollapseModule,
    MdbCarouselModule,
    DateRangePickerModule,



    ToastrModule.forRoot(), // Initialize the Toastr module
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right', // Adjust the toast position as needed
    }),
    MatDatepickerModule,
    MatCardModule,

  ],


  exports: [],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : AppHttpInterceptor, multi : true},
    { provide: DateAdapter, useClass: NativeDateAdapter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
