import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSurveyComponent } from './view-survey/view-survey.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
 
      {path: 'view', component: ViewSurveyComponent},
      {path: 'add', component: AddSurveyComponent}
  
 
]


@NgModule({
  declarations: [ViewSurveyComponent, AddSurveyComponent, SurveyComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [SurveyComponent]
})
export class SurveyModule { }
