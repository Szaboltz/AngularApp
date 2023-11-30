import { Component } from '@angular/core';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aqui é o AppComponent';

  show: string;

  constructor(private service: AppService) { 
    this.show = this.service.getMessage();
   }
}
