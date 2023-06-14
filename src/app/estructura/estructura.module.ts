import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { PieComponent } from './components/pie/pie.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListadoTablaComponent } from './components/listado-tabla/listado-tabla.component';
import { SharedModule} from "../shared/shared.module";
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { HomeComponent } from './components/home/home.component';
import { ListadoTarjetaComponent } from './components/listado-tarjeta/listado-tarjeta.component';
import { BarraComponent } from './components/barra/barra.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CabeceraComponent,
    CuerpoComponent,
    PieComponent,
    PrincipalComponent,
    ListadoTablaComponent,
    NavegacionComponent,
    HomeComponent,
    ListadoTarjetaComponent,
    BarraComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class EstructuraModule { }
