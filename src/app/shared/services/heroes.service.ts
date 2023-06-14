import { Injectable } from '@angular/core';
import { Heroe } from '../models/heroe.model';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public urlImagenesExt: string = "https://borilio.github.io/curso-angular/img/avatars/";

  constructor(private httpClient: HttpClient) {
  }
  public getHeroes(): Observable<Heroe[]> {
   return this.httpClient.get<Heroe[]>("https://heroes.mocklab.io/heroes");
  }


}

