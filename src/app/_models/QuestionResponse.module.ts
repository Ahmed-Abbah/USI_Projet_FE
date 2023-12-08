// question.model.ts

import { Metier } from "./Metier.module";
import {ReponseResponse} from "./ReponseResponse.module";
import { UserResponse } from "./UserResponse.module";


export interface QuestionResponse {
    id: number;
    question: string;
    type: string;
    user :UserResponse; 
    
    reponses: ReponseResponse[];
}
