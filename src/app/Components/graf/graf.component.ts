import { Component } from '@angular/core';

@Component({
  selector: 'app-graf',
  standalone: true,
  imports: [],
  templateUrl: './graf.component.html',
  styleUrls: ['./graf.component.css']
})
export class GrafComponent {
  attack: number = 55;   // Valor de ataque
  defense: number = 40;  // Valor de defensa
  health: number = 5;    // Cantidad de corazones (vida)
}
