import { publishFacade } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  nome: string = `"Olá, sou o primeiro serviço da aplicação!"`;

  constructor() { }

  getMessage() {
    return this.nome
  }


}
