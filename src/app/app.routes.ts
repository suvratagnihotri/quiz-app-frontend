import { Routes } from '@angular/router';
import { ResultComponent } from './quiz-app-components/result/result.component';
import { QuestionComponent } from './quiz-app-components/question/question.component';

export const routes: Routes = [
    { path: 'quiz', component: QuestionComponent },
    { path: 'result', component: ResultComponent },
    { path: '',   redirectTo: '/quiz', pathMatch: 'full' }
];
