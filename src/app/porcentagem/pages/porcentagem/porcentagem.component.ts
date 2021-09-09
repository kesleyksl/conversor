import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'porcentagem-porcentagem',
  templateUrl: './porcentagem.component.html',
  styleUrls: ['./porcentagem.component.scss']
})
export class PorcentagemComponent implements OnInit {
  porcentagem: number;
  valor: number;
  _result: any;
  constructor() { }

  ngOnInit(): void {
  }

  getResult(){
    let result = (this.valor * this.porcentagem) / 100;
    return isNaN(result)?0:result;
  }
}
