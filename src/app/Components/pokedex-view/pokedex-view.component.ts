import { Component } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { GrafComponent } from '../graf/graf.component';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokemonComponent, GrafComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrls: ['./pokedex-view.component.css']
})
export class PokedexViewComponent {
navegar(arg0: string) {
throw new Error('Method not implemented.');
}
  pokemonImagen: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'; // Imagen inicial
  pokemonId: number = 1; // ID inicial del Pokémon
  attack: number = 49; // Ataque inicial
  defense: number = 49; // Defensa inicial

  // Función para generar un Pokémon aleatorio
  private generateRandomPokemon() {
    this.pokemonId = Math.floor(Math.random() * 151) + 1; // Genera un ID entre 1 y 151
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;
    
    // Genera estadísticas aleatorias
    this.attack = Math.floor(Math.random() * 100); // Ataque aleatorio entre 0 y 99
    this.defense = Math.floor(Math.random() * 100); // Defensa aleatoria entre 0 y 99
  }

  handlePokemon(event: any) {
    this.pokemonId += event;
    this.updatePokemonImage();
  }

  cambiarPokemon() {
    this.generateRandomPokemon(); // Llama a la función para generar un Pokémon aleatorio
  }

  private updatePokemonImage() {
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;
  }
}
