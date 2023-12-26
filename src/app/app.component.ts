import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './quiz-app-components/question/question.component';
import { ResultComponent } from './quiz-app-components/result/result.component';
import { SimpleService } from './models/simple-service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule,QuestionComponent,ResultComponent],
  providers: [
      SimpleService
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quiz-app';
}
