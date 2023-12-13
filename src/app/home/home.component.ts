import {Component, inject} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";
import {filter, from, Observable, of} from "rxjs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  inputPokemon: any = ""
  pokemonService: PokemonService = inject(PokemonService)
  pokemons!: Observable<Pokemon[]>
  onePokemon!:Pokemon

  constructor() {
    this.pokemons = this.pokemonService.getAllPokemons()
    this.pokemonService.getOnePokemon(Math.round(Math.random() * (1017 - 1) + 1)).subscribe(ReturnedPokemon => this.onePokemon = ReturnedPokemon)
  }
  public findOnePokemon(id:number){

    this.pokemonService.getOnePokemon(id).subscribe(ReturnedPokemon => this.onePokemon = ReturnedPokemon)
  }

  comparestring(input:string, input2:string):boolean{
    if (input.toLowerCase().includes(input2.toLowerCase())){
      return true
    }
    return false
  }

  normalizestring(text:string):string{
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  }
}
