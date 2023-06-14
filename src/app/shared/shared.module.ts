import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsPoderosoPipe } from './pipes/es-poderoso.pipe';
import { HonorPipe } from './pipes/honor.pipe';



@NgModule({
  declarations: [
    EsPoderosoPipe,
    HonorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HonorPipe,
    EsPoderosoPipe
  ]
})
export class SharedModule { }
