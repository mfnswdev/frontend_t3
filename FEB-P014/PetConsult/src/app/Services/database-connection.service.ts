import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AtendimentoInterface } from '../atendimento-interface';


@Injectable({
  providedIn: 'root'
})
export class DatabaseConnectionService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<{ [key: string]: AtendimentoInterface }>('https://database-teste-70ca1-default-rtdb.firebaseio.com/data.json').pipe(map(responseData => {
      const postArray: AtendimentoInterface[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postArray.push({ ...(responseData as any)[key], id: key });
        }
      }
      return postArray;
    }
    ));
  }
  postData(data: any) {
    return this.http.post('https://database-teste-70ca1-default-rtdb.firebaseio.com/data.json', data);
  }
  editarAtendimento(id: string, atendimentoData: {
    dateAtendimento: string,
    tutorName: string,
    petName: string,
    especie: string,
    race: string,
    obs: string
  }
  ) {
    return this.http.put(`https://database-teste-70ca1-default-rtdb.firebaseio.com/data/${id}.json`, atendimentoData, { observe: 'response' });
  }
  getAtendimentoByID(id: string) {
    return this.http.get<AtendimentoInterface>(`https://database-teste-70ca1-default-rtdb.firebaseio.com/data/${id}.json`);
  }

  apagarTodosAtendimentos() {
    return this.http.delete('https://database-teste-70ca1-default-rtdb.firebaseio.com/data.json');
  }
}
