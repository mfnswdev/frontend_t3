import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { formContact } from "../components/models/project-from";

@Injectable({
    providedIn: 'root'
})
export class dbFormService {

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get<{ [key: string]: formContact }>('https://baconba-project-default-rtdb.firebaseio.com/data/animais.json').pipe(map(responseData => {
            const postArray: formContact[] = [];
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
        return this.http.post('https://baconba-project-default-rtdb.firebaseio.com/data/animais.json', data);
    }
}