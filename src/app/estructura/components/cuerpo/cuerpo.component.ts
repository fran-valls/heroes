import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  public listadoHeroes: Array<any>;

  constructor() {
    this.listadoHeroes = [
      {
        nombre: "Superman",
        imagen: "",
        ataque: 80,
        defensa: 93,
        poder: 350,
        vida: 100
      },
      {
        nombre: "Batman",
        imagen: "",
        ataque: 60,
        defensa: 75,
        poder: 100,
        vida: 100
      },
      {
        nombre: "Spiderman",
        imagen: "",
        ataque: 86,
        defensa: 89,
        poder: 150,
        vida: 100
      },
      {
        nombre: "Linterna Verde",
        imagen: "",
        ataque: 82,
        defensa: 83,
        poder: 200,
        vida: 100
      },
      {
        nombre: "Ironman",
        imagen: "",
        ataque: 83,
        defensa: 85,
        poder: 150,
        vida: 100
      },
      {
        nombre: "Capitán America",
        imagen: "",
        ataque: 64,
        defensa: 95,
        poder: 135,
        vida: 100
      },
      {
        nombre: "Thor",
        imagen: "",
        ataque: 92,
        defensa: 75,
        poder: 275,
        vida: 100
      }
    ];
  }
}
