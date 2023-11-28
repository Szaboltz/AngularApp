import { Component, OnInit } from '@angular/core';
import { Teste } from './model/teste';
import { TesteService } from '../service/teste.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../shared/components/error/error.component';

@Component({
  selector: 'appTeste',
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent implements OnInit {
  nome: string; 
  n1: number;
  n2: number; 
  r: number;
  vet: string[] = [];

  data: Observable<Teste[]>; // Tipagem da variável 
  displayedColumnsAll = ["id", "name", "category"]
  displayedColumnsId = ["id"]
  displayedColumnsName = ["name"]
  displayedColumnsCategory = ["category"]
  

    constructor(
      private dataTable: TesteService,
      public dialog: MatDialog
    ) 
    {
      this.nome = "Aqui é o TesteComponent";
      this.n1 = 5;
      this.n2 = 8;
      this.r = this.n1 + this.n2;
      this.vet = ["Teste 1", "Teste 2", "Teste 3", "Teste 4"];

      // Por ser um observable necessita ser declarado aqui 
      this.data = this.dataTable.getList().pipe(
        catchError((error) => {
          this.getError('Erro ao carregar dados!');
          return of([]);
        })
      ); 
    }

    getError(errorMessage: string) {
      this.dialog.open(ErrorComponent, {
        data: errorMessage,
      });
    }

  // Isso aqui faz com que o componente faça a requisição dos dados ao ser inicializado
  ngOnInit(): void { 
    
  }
}
