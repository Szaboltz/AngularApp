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
  vet: string[] = []

  constructor() {
    this.nome = "Aqui é o TesteComponent";
    this.n1 = 5;
    this.n2 = 8;
    this.r = this.n1 + this.n2;
    this.vet = ["Teste 1", "Teste 2", "Teste 3", "Teste 4"];
  }
}
