import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Datapeso } from '../Models/datapeso';
import { Datapig } from '../Models/datapig';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<{ [key: string]: Datapig }>('https://baconba-project-default-rtdb.firebaseio.com/data.json').pipe(map(responseData => {
      const postArray: Datapig[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postArray.push({ ...(responseData as any)[key], id: key });
        }
      }
      return postArray;
    }
    ));
  }

  getPesagens(): Observable<Datapeso[]> {
    return this.http.get<{ [key: string]: Datapig }>('https://baconba-project-default-rtdb.firebaseio.com/data.json').pipe(
      map(responseData => {
        const pesagensArray: Datapeso[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            // Assuming that 'pesagens' is an array within each 'Datapig' object
            const pesagens: Datapeso[] = responseData[key].pesagens || [];
            pesagensArray.push(...pesagens);
          }
        }
        return pesagensArray;
      })
    );
  }
  getPesagemByID(id: string) {
    return this.http.get<{ [key: string]: Datapeso }>(`https://baconba-project-default-rtdb.firebaseio.com/data/${id}/pesagens.json`).pipe(
      map(responseData => {
        const pesagensArray: Datapeso[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            pesagensArray.push({ ...(responseData as any)[key], id: key });
          }
        }
        return pesagensArray;
      })
    )
  }

  getPesagemDbByID(id: string, pesagemId: string) {
    return this.http.get<Datapeso>(`https://baconba-project-default-rtdb.firebaseio.com/data/${id}/pesagens/${pesagemId}.json`);
  }
  postData(data: any) {
    return this.http.post('https://baconba-project-default-rtdb.firebaseio.com/data.json', data);
  }
  postPesagem(data: any, id: string) {
    return this.http.post(`https://baconba-project-default-rtdb.firebaseio.com/data/${id}/pesagens.json`, data)
  }
  editarAnimal(id: string, pigData: {
    porcoId: number,
    paiId: number,
    maeId: number,
    dataNasc: string,
    dataSaida: string,
    status: string,
    genero: string
  }
  ) {
    return this.http.put(`https://baconba-project-default-rtdb.firebaseio.com/data/${id}.json`, pigData, { observe: 'response' });
  }
  getAnimalByID(id: string) {
    return this.http.get<Datapig>(`https://baconba-project-default-rtdb.firebaseio.com/data/${id}.json`);
  }

  updatePesagem(id: string, pesagemId: string, weightValue: number): Observable<any> {
    return this.http.patch(`https://baconba-project-default-rtdb.firebaseio.com/data/${id}/pesagens/${pesagemId}.json`, { peso : weightValue }, { observe: 'response' });
  }


  deleteAnimalByID(id: string) {
    return this.http.delete<Datapig>(`https://baconba-project-default-rtdb.firebaseio.com/data/${id}.json`);
  }

  deletePesagemByID(idList: string, idItem: string) {
    return this.http.delete<Datapig>(`https://baconba-project-default-rtdb.firebaseio.com/data/${idList}/pesagens/${idItem}.json`);
  }
}
