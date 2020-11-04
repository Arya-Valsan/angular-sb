import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PizzaPartyComponent, ViewTodosComponent } from './view-todos/view-todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { SentenceCasePipe } from './sentence-case.pipe';
import { SearchTextPipe } from './search-text.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SearchNamePipe } from './search-name.pipe';

import { SurveyModule } from './survey/survey.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/viewemployee' },
  {path:'viewemployee', component: ViewEmployeesComponent},
  {path:'addemployee', component: AddEmployeeComponent},
  {path:'courses', component: ViewCoursesComponent},
  {path:'details/:id', component: EmployeeDetailsComponent},
  {
    path: 'survey',
    loadChildren: () => import('./survey/survey.module').then(m => m.SurveyModule)
  },
  // {path: '', component: ViewTodosComponent},
  // {path: 'add', component: AddTodoComponent},
  // {path:'**', component: NotFoundComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ViewCoursesComponent,
    ViewEmployeesComponent,
    AddEmployeeComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    EmployeeDetailsComponent,
    PizzaPartyComponent,
    ViewTodosComponent,
    AddTodoComponent,
    SentenceCasePipe,
    SearchTextPipe,
    SearchNamePipe
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SurveyModule,

    RouterModule.forRoot(routes),
    BrowserAnimationsModule,


    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule

   
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
