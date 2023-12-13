import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonService} from "../pokemon.service";
import {Observable, Subscription} from "rxjs";
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemonService: PokemonService = inject(PokemonService)

}
