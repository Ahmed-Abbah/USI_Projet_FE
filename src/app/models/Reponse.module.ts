import { TypeQuestion } from "./Enums.module";
import { Question } from "./Question.module";
import { Vote } from "./Vote.module";

// reponse.model.ts
export interface Reponse {
    id: number;
    reponse: string;
    type: TypeQuestion;
    question: Question;
    parent: Reponse;
    vote: Vote[];
}
