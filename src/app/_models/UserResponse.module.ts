import { Fonction, Role } from "./Enums.module";
import { Vote } from "./VoteRequest.module";

// user.model.ts
export interface UserResponse {
    id: number;
    email: string;
    password: string;
    nom: string;
    prenom: string;
    fonction: Fonction;
    role: Role;
}
