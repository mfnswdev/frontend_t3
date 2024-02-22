import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBancoService {
  private consultas: any[] = [];


  constructor() 
  { }

  salvarConsulta(consulta: any){
    this.consultas.push(consulta);
  }

  getConsultas(){
    return this.consultas;
  }
}
