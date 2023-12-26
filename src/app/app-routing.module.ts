import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { QuestionComponent } from './quiz-app-components/question/question.component';
import { ResultComponent } from './quiz-app-components/result/result.component';

const routes: Routes = [
  { path: '/quiz', component: QuestionComponent },
  { path: '/result', component: ResultComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
