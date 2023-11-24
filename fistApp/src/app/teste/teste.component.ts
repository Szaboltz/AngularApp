import { Component } from '@angular/core';

@Component({
  selector: 'appTeste',
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
  nome: string; 
  n1: number;
  n2: number; 
  r: number;

  constructor() {
    this.nome = "Teste";
    this.n1 = 5;
    this.n2 = 8;
    this.r = this.n1 + this.n2;
  }
}
