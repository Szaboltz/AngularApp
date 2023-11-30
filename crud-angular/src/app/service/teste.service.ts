import { Injectable } from '@angular/core';
import { Teste } from '../teste/model/teste';
import { HttpClient } from '@angular/common/http';
import { delay, first } from 'rxjs';
// import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  private readonly api = '/assets/teste.json';

  constructor(private httpClient: HttpClient) { 

  }

  getList() {
    return this.httpClient.get<Teste[]>(this.api).pipe(first(), delay(2000)); // <> Tipa a requisição http 
  }
}
