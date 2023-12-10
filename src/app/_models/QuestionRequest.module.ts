import {MetierRequest} from "./MetierRequest.module";


export interface QuestionRequest {
    id: number;
    question: string;
    metier : MetierRequest;

}
