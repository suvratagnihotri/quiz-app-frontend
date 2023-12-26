export class QuestionModel{
    id: number;
    questionContent: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    difficultyLevel:String;
    

  constructor(id:number,questionContent:string,option1:string,option2:string,option3:string,option4:string,difficultyLevel:string) {
    this.id = id
    this.questionContent = questionContent;
    this.option1 =option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.difficultyLevel = difficultyLevel;
  }
}