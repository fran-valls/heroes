import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoTablaComponent } from './estructura/components/listado-tabla/listado-tabla.component';
import { ListadoTarjetaComponent } from './estructura/components/listado-tarjeta/listado-tarjeta.component';
import { HomeComponent } from './estructura/components/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "listado-tabla", component: ListadoTablaComponent},
  {path: "listado-tarjeta", component: ListadoTarjetaComponent},
  {path: "**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
