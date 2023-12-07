// question.model.ts

import { Metier } from "./Metier.module";
import {ReponseResponse} from "./ReponseResponse.module";


export interface QuestionResponse {
    id: number;
    question: string;
    type: string;
    reponses: ReponseResponse[];
}
