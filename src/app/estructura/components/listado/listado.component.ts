import { Component, EventEmitter, Output } from '@angular/core';
import { Heroe } from 'src/app/shared/models/heroe.model';
import { HeroesService } from 'src/app/shared/services/heroes.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public listadoHeroes: Heroe[];

  @Output() public eventoFavorito = new EventEmitter<Heroe>();

  constructor(private heroesService: HeroesService) {
    this.listadoHeroes = [];
  }

  //Las llamadas a los servicios, no deberían de estar en el constructor.
  ngOnInit(): void {
    this.actualizar();
  }

  public actualizar(): void {
    this.listadoHeroes = this.heroesService.getHeroes();
  }

  public hayHeroes(): boolean {
    return this.listadoHeroes.length > 0;
  }

  public onSeleccionarHeroe(heroeFavorito: Heroe): void {
    this.eventoFavorito.emit(heroeFavorito);
  }

}
