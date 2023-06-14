import {Component, EventEmitter, Output} from '@angular/core';

import {HeroesService} from "../../../shared/services/heroes.service";
import {Heroe} from "../../../shared/models/heroe.model";

@Component({
  selector: 'app-listado-tabla',
  templateUrl: './listado-tabla.component.html',
  styleUrls: ['./listado-tabla.component.css']
})
export class ListadoTablaComponent {
  public listadoHeroes: Heroe[];
  public mensajeError: string;
  public cargandoDatos: boolean;

  @Output() public eventoFavorito: EventEmitter<Heroe> = new EventEmitter<Heroe>();

  constructor(private heroesService: HeroesService) {
    console.log('Listado-tabla component ha sido cargado')
    this.listadoHeroes = [];
    this.cargandoDatos = false;
    this.mensajeError = "";
  }

  //Las llamadas a los servicios, no deberían de estar en el constructor.
  ngOnInit(): void {
    this.actualizar();
  }

  public actualizar(): void {
    this.cargandoDatos = true;
    this.heroesService.getHeroes().subscribe(
      {
        next: (datos: Heroe[]) => {
          console.log('Ya han llegado los datos', datos);
          this.listadoHeroes = datos;
          this.cargandoDatos = false;
        },
        error: (datosError) => {
          console.log('Ha habido algún error');
          this.mensajeError = datosError.message;
          this.cargandoDatos = false;
        }
      }
    );
  }

  public hayHeroes(): boolean {
    return this.listadoHeroes.length > 0;
  }

  public onSeleccionarHeroe(heroe: Heroe){
    console.log("Vamos a emitir un evento con la información de ", heroe);
    this.eventoFavorito.emit(heroe); // Así emitimos un evento con la información que queramos dentro
  }
}
