import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SimpleService } from '../../models/simple-service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive], 
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  evaluationData: any;
  totalScore :any;
  score:any
  title:any;


  constructor(private route: ActivatedRoute,private simpleService:SimpleService) {
    console.log("on result page");
    console.log(this.simpleService.text);
    this.evaluationData = this.simpleService.text;
    this.totalScore = this.simpleService.text.state.totalScore;
    this.score = this.simpleService.text.state.scored;
    this.title = this.simpleService.text.state.title;

    // this.evaluationData = JSON.parse(this.simpleService.text);
    // this.evaluationData = this.route.snapshot.paramMap.get('state');
    // console.log(this.evaluationData);
  }
}
