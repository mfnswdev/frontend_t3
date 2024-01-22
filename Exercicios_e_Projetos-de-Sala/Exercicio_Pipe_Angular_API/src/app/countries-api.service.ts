import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }


public getCountry(){
  return this.httpClient.get("https://restcountries.com/v3.1/all")
}

}
