import { dataAtividades, statusAtividades } from "./dataAtividades";
import { dataSessaoDetails } from "./dataSessaoDetail";

export interface DataSessao {
    id?: string,
    porcoId: PorcoSessao[],
    data: string,
    descricao: string,
    atividades: dataSessaoDetails[],
}

export interface PorcoSessao {
    id?: string,
    porcoId: string,
}
export interface PorcoAtividade {
    sessaoId: string,
    porcoId: string,
    atividadeId: string,
    status: boolean
}
