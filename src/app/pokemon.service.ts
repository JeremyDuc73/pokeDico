import {inject, Injectable} from '@angular/core';
import {Pokemon} from "./pokemon";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = "https://tyradex.vercel.app/api/v1"
  private http = inject(HttpClient)
  constructor() { }

  getAllPokemons(): Observable<Pokemon[]>
  {
    return this.http.get<Pokemon[]>(this.baseUrl + '/pokemon')
  }

}
