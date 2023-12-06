// vote.model.ts

import { Question } from "./Question.module";
import { Reponse } from "./Reponse.module";
import { User } from "./User.module";

export interface Vote {
    id: number;
    nbreVote: number;
    question: Question;
    reponse: Reponse;
    user: User;
}
