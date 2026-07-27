import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class CalculadoraComponent {
  numero1 = 0;
  numero2 = 0;
  resultado = 0;

  // Função criada para resolver o erro
  somar() {
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }
}