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
  public cargandoDatos: boolean;


  constructor(public heroesService: HeroesService) {
    console.log('Tarjeta component ha sido cargado');
    this.heroes = [];
    this.cargandoDatos = false;
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  public cargarDatos() {
    this.cargandoDatos = true;
    this.heroesService.getHeroes().subscribe(
      {
        next: (datos: Heroe[]) => {
          console.log('Ya han llegado los datos', datos);
          this.heroes = datos;
          this.cargandoDatos = false;
        },
        error: (datosError) => {
          console.log('Ha habido algún error');
          this.cargandoDatos = false;
        }
      }
    );
  }
}
