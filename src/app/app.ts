import { Component } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculadoraComponent], // <-- Adicione a Calculadora aqui
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}