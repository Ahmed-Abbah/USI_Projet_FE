import { Fonction, Role } from "./Enums.module";


// user.model.ts
export interface UserRequest {
    id: number;
    email: string;
    password: string;
    nom: string;
    prenom: string;
    fonction: Fonction;
}