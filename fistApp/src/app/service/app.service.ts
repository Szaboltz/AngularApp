import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  nome: string = `"Olá, sou o primeiro serviço da aplicação!"`;

  constructor() { }

  getMessage() {
    return this.nome
  }


}
