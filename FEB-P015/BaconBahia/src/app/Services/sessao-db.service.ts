import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataSessao } from '../Models/datasessao';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessaoDBService {

  constructor(private http : HttpClient) { }

  getData() {
    return this.http.get<{ [key: string]: DataSessao }>('https://baconba-project-default-rtdb.firebaseio.com/data/sessoes.json').pipe(map(responseData => {
      const postArray: DataSessao[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postArray.push({ ...(responseData as any)[key], id: key });
        }
      }
      return postArray;
    }
    ));
  }  
  getSessaoByID(id: string) {
    return this.http.get<DataSessao>(`https://baconba-project-default-rtdb.firebaseio.com/data/sessoes/${id}.json`);
  }
  postData(data: any) {
    return this.http.post<{name: string}>('https://baconba-project-default-rtdb.firebaseio.com/data/sessoes.json', data).pipe(
      map((responseData: {name: string}) => {
        return responseData.name;
      })
    );
  }

  editarSessao(id: string, DataSessao: {
    porcoId: string[],
    data: string,
    descricao: string,
    atividades: string[],
  }
  ) {
    return this.http.put(`https://baconba-project-default-rtdb.firebaseio.com/data/sessoes/${id}.json`, DataSessao, { observe: 'response' });
  }

  deleteSessaoByID(id: string) {
    return this.http.delete<DataSessao>(`https://baconba-project-default-rtdb.firebaseio.com/data/sessoes/${id}.json`);
  }

  postPorcoAtividade(data: any) {
    return this.http.post('https://baconba-project-default-rtdb.firebaseio.com/data/porcoAtividade.json', data);
  }
  
  
}
