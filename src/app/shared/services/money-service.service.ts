import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyServiceService {

  private readonly url = 'https://economia.awesomeapi.com.br/json'
  constructor(private http: HttpClient) { }

  getMoneyValue(): Observable<any>{
    return this.http.get(`${this.url}/all`);
  }
}
