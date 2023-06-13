import { Component } from '@angular/core';
import { Heroe } from 'src/app/shared/models/heroe.model';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
borrarFavorito() {
throw new Error('Method not implemented.');
}
  public heroeFavorito?:Heroe;

  public procesarEvento(heroeRecibido: Heroe ):void{
    this.heroeFavorito = heroeRecibido;
  }
}
