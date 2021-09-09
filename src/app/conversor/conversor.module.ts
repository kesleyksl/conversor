import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorComponent } from './pages/conversor/conversor.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule,
    ConversorRoutingModule,
    SharedModule
  ]
})
export class ConversorModule { }
