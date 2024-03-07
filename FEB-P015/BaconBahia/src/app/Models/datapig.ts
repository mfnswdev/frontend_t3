import { Datapeso } from "./datapeso"

export interface Datapig {
    porcoId: string,
    paiId: string,
    maeId: string,
    genero: string,
    dataNasc: string,
    dataSaida: string,
    status: string,
    id?: string,
    pesagens? : Datapeso[]
}
