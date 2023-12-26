import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { QuizModel } from '../../models/quiz-model';
import { SimpleService } from '../../models/simple-service';
import { NavigationExtras, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  jsonData :any;
  questions :any
  quiz!: QuizModel;
  constructor(private http: HttpClient,private router: Router,private simpleService: SimpleService) {
      this.http.get('http://localhost:8080/quiz/get/2',{responseType: 'json'}).subscribe(data => {
        console.log(JSON.stringify(data));
        this.jsonData = JSON.parse(JSON.stringify(data));
        this.questions = this.jsonData.questions;
      });
   }

   postData(jsonData: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>('http://localhost:8080/quiz/evaluate', jsonData,{headers});
  }
  examSubmitted() {
    const selectedOptions = [];

    for (const question of this.questions) {
      const selectedOption = document.querySelector(`input[name='question_${question.id}']:checked`);
      if (selectedOption) {
        selectedOptions.push({
          questionId: question.id,
          selectedValue: selectedOption.getAttribute('value')
        });
      }
    }

    console.log(selectedOptions);
    for (let i = 0; i < selectedOptions.length; i++) {
      this.questions[i].rightAnswer = selectedOptions[i].selectedValue;
    }
    this.jsonData.questions = this.questions;
    console.log(this.jsonData);
    this.postData(JSON.stringify(this.jsonData)).subscribe(receivedData =>{
      const navigationExtras: NavigationExtras = {
        state: {
          totalScore: receivedData.totalScore,
          scored: receivedData.scored,
          title: receivedData.title,
        }
      };

      this.simpleService.text = navigationExtras;
  
      this.router.navigate(['/result'], navigationExtras);
    });
  }
  
}
