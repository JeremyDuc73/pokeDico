import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path:'', redirectTo: "/pokedex", pathMatch:"full"
  },
  {
    path:'pokedex', component: HomeComponent
  }
];
