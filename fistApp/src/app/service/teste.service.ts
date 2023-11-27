import { Injectable } from '@angular/core';
import { Teste } from '../teste/model/teste';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private httpClient: HttpClient) { 

    

  }

  getList(): Teste[] {
    return [
      {id: '1', name: 'Henrique', category: 'Humano'}
    ]
  }
}
