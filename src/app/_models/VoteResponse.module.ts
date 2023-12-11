// vote.model.ts



import {QuestionResponse} from "./QuestionResponse.module";
import {UserResponse} from "./UserResponse.module";
export interface VoteResponse {
    id: number;
    nbreVote: number;

    date: Date;

    question:QuestionResponse;
    votedUsers:UserResponse[];

}
