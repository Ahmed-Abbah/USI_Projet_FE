// question.model.ts


import {ReponseResponse} from "./ReponseResponse.module";
import {VoteResponse} from "./VoteResponse.module";
import {UserResponse} from "./UserResponse.module";


export interface QuestionResponse {
    id: number;
    question: string;
    type: string;
    vote : VoteResponse[];
    user : UserResponse;
    reponses: ReponseResponse[];
}
