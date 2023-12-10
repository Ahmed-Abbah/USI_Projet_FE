import { Fonction, Role } from "./Enums.module";
import {Expert} from "../_enums/Expert.enum.ts";


// user.model.ts
export interface UserResponse {
    id: number;
    email: string;
   // password: string;
    nom: string;
    prenom: string;
    fonction: Fonction;
    role: Role;
    expert : Expert;
    isExits : boolean;
}
