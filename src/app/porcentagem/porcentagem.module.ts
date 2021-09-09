import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorcentagemRoutingModule } from './porcentagem-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PorcentagemComponent } from './pages/porcentagem/porcentagem.component';


@NgModule({
  declarations: [
    PorcentagemComponent
  ],
  imports: [
    CommonModule,
    PorcentagemRoutingModule,
    SharedModule
  ]
})
export class PorcentagemModule { }
