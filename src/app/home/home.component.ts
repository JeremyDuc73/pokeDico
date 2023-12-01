import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pokemonService: PokemonService = inject(PokemonService)
  pokemons: Observable<Pokemon[]> = this.pokemonService.getAllPokemons()
}
