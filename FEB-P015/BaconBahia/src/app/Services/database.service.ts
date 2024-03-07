import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datapig } from '../Models/datapig';
import { Observable, map } from 'rxjs';
import { Datapeso } from '../Models/datapeso';

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
  postData(data: any) {
    return this.http.post('https://baconba-project-default-rtdb.firebaseio.com/data.json', data);
  }
  editarAnimal(id: string, pigData: {
    dateAtendimento: string,
    tutorName: string,
    petName: string,
    especie: string,
    race: string,
    obs: string
  }
  ) {
    return this.http.put(`https://baconba-project-default-rtdb.firebaseio.com/data/${id}.json`, pigData, { observe: 'response' });
  }
  getAnimalByID(id: string) {
    return this.http.get<Datapig>(`https://baconba-project-default-rtdb.firebaseio.com/data/${id}.json`);
  }

  
  deleteAnimalByID(id: string) {
    return this.http.delete<Datapig>(`https://baconba-project-default-rtdb.firebaseio.com/data/${id}.json`);
  }

  deletePesagemByID(idList: string, idItem: string) {
    return this.http.delete<Datapig>(`https://baconba-project-default-rtdb.firebaseio.com/data/${idList}/pesagens/${idItem}.json`);
  }
}
