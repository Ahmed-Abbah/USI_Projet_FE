

// reponse.model.ts
export interface ReponseResponse {
    id: number;
    reponse: string;
    parent : ReponseResponse;
    enfants : ReponseResponse[];
}
