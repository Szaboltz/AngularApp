import { Component } from '@angular/core';
import { TesteService } from './service/teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aqui é o AppComponent';

  show: string;

  constructor(private service: TesteService) { 
    this.show = this.service.getMessage();
   }
}
