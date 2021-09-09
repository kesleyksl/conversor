import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Conversor',
    pathMatch: 'full'
  },
  {
    path: 'Conversor',
    loadChildren: () => import('./conversor/conversor.module').then(m => m.ConversorModule),
  },
  {
    path: 'Porcentagem',
    loadChildren: () => import('./porcentagem/porcentagem.module').then(m => m.PorcentagemModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
