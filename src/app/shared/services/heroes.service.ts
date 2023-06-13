import { Injectable } from '@angular/core';
import { Heroe } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public urlImagenesExt: string ="https://borilio.github.io/curso-angular/img/";

  constructor() { }

public getHeroes() : Heroe[] {
    let listadoHeroes : Heroe[]= [
      new Heroe("Superman", 350, 94, 80, 93, 100, this.urlImagenesExt + "avatars/superman.svg"),
      new Heroe("Batman", 50, 75, 60, 75, 100, this.urlImagenesExt + "avatars/batman.svg"),
      new Heroe("Capitana Marvel", 355, 70, 85, 80, 100, ""),
      new Heroe("Catwoman", 50, -5, 63, 72, 100, ""),
      new Heroe("Spiderman", 150, 85, 86, 89, 100, this.urlImagenesExt + "avatars/spiderman.svg"),
      new Heroe("Viuda Negra", 35, 37, 88, 83, 100, ""),
      new Heroe("Thanos", 250, -92, 90, 95, 100, ""),
      new Heroe("Linterna Verde", 200, 80, 82, 83, 100, this.urlImagenesExt + "avatars/linternaverde.svg"),
      new Heroe("Ironman", 150, 69, 83, 85, 100, this.urlImagenesExt + "avatars/ironman.svg"),
      new Heroe("Capitán América", 135, 95, 64, 95, 100, this.urlImagenesExt + "avatars/capitanamerica.svg"),
      new Heroe("Thor", 275, 60, 92, 75, 100, ""),
    ];
    return listadoHeroes;
  }
}

