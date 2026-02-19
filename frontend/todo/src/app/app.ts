import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Welcome } from './welcome/welcome';
import { Goodbye } from './goodbye/goodbye';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Welcome, Goodbye, Login, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo');
  message = 'Hello World!';
  name = "Abhishek Anand";
}
