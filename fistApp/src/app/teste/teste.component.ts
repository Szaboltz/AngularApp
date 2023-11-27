import { Component } from '@angular/core';
import { Teste } from './model/teste';

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
  vet: string[] = [];

  data: Teste[] = [];
  displayedColumnsAll = ["id", "name", "category"]
  displayedColumnsId = ["id"]
  displayedColumnsName = ["name"]
  displayedColumnsCategory = ["category"]

  constructor() {
    this.nome = "Aqui é o TesteComponent";
    this.n1 = 5;
    this.n2 = 8;
    this.r = this.n1 + this.n2;
    this.vet = ["Teste 1", "Teste 2", "Teste 3", "Teste 4"];
  }
}
