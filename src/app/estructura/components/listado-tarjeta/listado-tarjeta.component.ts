import {Component, OnInit} from '@angular/core';
import {Heroe} from "../../../shared/models/heroe.model";
import {HeroesService} from "../../../shared/services/heroes.service";

@Component({
  selector: 'app-listado-tarjeta',
  templateUrl: './listado-tarjeta.component.html',
  styleUrls: ['./listado-tarjeta.component.css']
})
export class ListadoTarjetaComponent implements OnInit{
  public heroes: Heroe[];

  constructor(public heroesService: HeroesService) {
    console.log('Tarjeta component ha sido cargado');
    this.heroes = [];
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }


}