import { dataAtividades, statusAtividades } from "./dataAtividades";

export interface DataSessao {
    id?: string,
    porcoId: string[],
    data: string,
    descricao: string,
    atividades: string[],
    statusAtividades: statusAtividades
}