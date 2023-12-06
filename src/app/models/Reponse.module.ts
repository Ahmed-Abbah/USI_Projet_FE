import { TypeQuestion } from "./Enums.model";
import { Question } from "./question.model";
import { Vote } from "./vote.module";

// reponse.model.ts
export interface Reponse {
    id: number;
    reponse: string;
    type: TypeQuestion;
    question: Question;
    parent: Reponse;
    vote: Vote[];
}
