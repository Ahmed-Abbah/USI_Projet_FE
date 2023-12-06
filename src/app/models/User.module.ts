import { Fonction, Role } from "./Enums.model";
import { Vote } from "./vote.module";

// user.model.ts
export interface User {
    id: number;
    email: string;
    password: string;
    nom: string;
    prenom: string;
    fonction: Fonction;
    role: Role;
    vote: Vote[];
}
