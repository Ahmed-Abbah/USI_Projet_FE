// question.model.ts

import { Metier } from "./Metier.module";
import { Reponse } from "./ReponseResponse.module";
import { User } from "./UserRequest.module";
import { Vote } from "./VoteRequest.module";

export interface QuestionRequest {
    id: number;
    question: string;
}
