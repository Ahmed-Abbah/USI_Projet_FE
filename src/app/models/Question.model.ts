// question.model.ts

import { Metier } from "./Metier.module";
import { Reponse } from "./reponse.module";
import { User } from "./user.module";
import { Vote } from "./vote.module";

export interface Question {
    id: number;
    question: string;
    type: string;
    user: User;
    metier: Metier;
    reponses: Reponse[];
    vote: Vote[];
}
