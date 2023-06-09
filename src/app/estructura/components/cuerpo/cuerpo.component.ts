import { Component } from '@angular/core';
import { Heroe } from 'src/app/shared/models/heroe.model';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  public listadoHeroes: Heroe[];

  constructor(private heroesService: HeroesService) {
    this.listadoHeroes = [];
  }

  ngOnInit(): void {
    this.listadoHeroes = this.heroesService.getHeroes();
  }
}
