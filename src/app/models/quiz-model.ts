import { QuestionModel } from "./question-model";

export class QuizModel{
    id: number;
    questions:QuestionModel[];
    quizTitle:String;

    constructor(id:number,questions:QuestionModel[],quizTitle:string){
        this.id = id;
        this.questions = questions;
        this.quizTitle = quizTitle;
    }
}