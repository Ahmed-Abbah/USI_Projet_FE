import { TypeQuestion } from "./Enums.module";
import {ReponseRequest} from "./ReponseRequest.module";

// reponse.model.ts
export interface ReponseResponse {
    id: number;
    reponse: string;

    parent : ReponseResponse;
    enfants : ReponseResponse[];
}
