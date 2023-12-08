import {QuestionResponse} from "./QuestionResponse.module";

export interface MetierResponse{
    id: number;
    nom: string;
    description : string;
    questions : QuestionResponse[];

}
