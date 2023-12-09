import {Fonction} from "../_enums/Fonction.enum";


// user.model.ts
export interface UserRequest {
    id: number;
    email: string;
    password: string;
    nom: string;
    prenom: string;
    fonction: Fonction;
    // isExits : boolean
}
