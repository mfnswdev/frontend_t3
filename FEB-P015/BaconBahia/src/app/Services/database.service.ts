import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datapig } from '../Models/datapig';
import { map } from 'rxjs';

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
}
