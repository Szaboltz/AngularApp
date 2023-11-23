import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  standalone: true,
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
  nome = 'Sei lá';
  n1 = 6;
  n2 = 100;
  r = this.n1 + this.n2;
}
