// question.model.ts

import { Metier } from "./Metier.module";
import { Reponse } from "./Reponse.module";
import { User } from "./User.module";
import { Vote } from "./Vote.module";

export interface Question {
    id: number;
    question: string;
    type: string;
    user: User;
    metier: Metier;
    reponses: Reponse[];
    vote: Vote[];
}
