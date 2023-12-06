// vote.model.ts

import { Question } from "./question.model";
import { Reponse } from "./reponse.module";
import { User } from "./user.module";

export interface Vote {
    id: number;
    nbreVote: number;
    question: Question;
    reponse: Reponse;
    user: User;
}
