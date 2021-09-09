import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorcentagemComponent } from './pages/porcentagem/porcentagem.component';

const routes: Routes = [
  {
    path: '',
    component: PorcentagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorcentagemRoutingModule { }
