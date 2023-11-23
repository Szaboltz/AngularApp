import { Component } from '@angular/core';
import { TesteComponent } from './teste/teste.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TesteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ola';
}
