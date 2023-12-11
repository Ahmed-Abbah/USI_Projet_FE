// vote.model.ts



import {QuestionResponse} from "./QuestionResponse.module";
import {UserResponse} from "./UserResponse.module";
export interface VoteResponse {
    id: number;
    nbreVote: number;
    question:QuestionResponse;
    votedUsers:UserResponse[];
}
