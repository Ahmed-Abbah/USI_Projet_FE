import { Fonction, Role } from "./Enums.module";
import {Expert} from "../_enums/Expert.enum.ts";
import {ReponseResponse} from "./ReponseResponse.module";
import {QuestionResponse} from "./QuestionResponse.module";
import {VoteResponse} from "./VoteResponse.module";


// user.model.ts
export interface UserResponse {
    id: number;
    email: string;
   // password: string;
    nom: string;
    prenom: string;
    fonction: Fonction;
    role: Role;
    vote : VoteResponse[];
    questions : QuestionResponse[];
    reponses : ReponseResponse[];
    expert : Expert;
    isExits : boolean;
}
