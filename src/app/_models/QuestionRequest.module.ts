// question.model.ts

import { Metier } from "./MetierRequest.module";
import { Reponse } from "./ReponseResponse.module";
import { User } from "./UserRequest.module";
import { Vote } from "./VoteRequest.module";

export interface QuestionRequest {
    id: number;
    question: string;
}
