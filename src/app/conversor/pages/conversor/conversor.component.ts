import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { MoneyServiceService } from 'src/app/shared/services/money-service.service';
@Component({
  selector: 'conversor-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {

  private money: any;

  public reais: any;
  public dolares: any;
  public euros: any;

  @ViewChild('real') inputReal: ElementRef;
  @ViewChild('dolar') inputDolar: ElementRef;
  @ViewChild('euro') inputEuro: ElementRef;
  destroy$ = new Subject<any>();

  constructor(private moneyService: MoneyServiceService) { }

  ngOnInit(): void {
    this.moneyService.getMoneyValue().pipe
    (
      takeUntil(this.destroy$)
    )
    .subscribe(
      (money: any)=> {
        this.money = money;
        
      },
      (erro: any)=> console.log(erro)
    );
    
  }

  ngAfterViewInit(){
    this.changeMoneyValue();
  }

  calculate(value: number, referencia: string){
    if(!value || value === 0) {
      this.reais ="";
      this.euros ="";
      this.dolares="";
    } 
    else if(referencia === "BRL"){
        this.dolares = (value/this.money.USD.high).toFixed(2);
        this.euros = (value/this.money.EUR.high).toFixed(2);
      }
      else if(referencia === "USD"){
        this.reais = (value* this.money.USD.high).toFixed(2);
        this.euros = (value*this.money.USD.high /this.money.EUR.high).toFixed(2);
      }
      else if(referencia === "EUR"){
        this.dolares = (value* this.money.EUR.high/this.money.USD.high).toFixed(2);
        this.reais = (value*this.money.EUR.high).toFixed(2);
      }
      return
  }

  changeMoneyValue(){
    fromEvent(this.inputReal.nativeElement, "keyup").pipe(takeUntil(this.destroy$)).subscribe(
      e=> {this.calculate(this.reais, "BRL");}
    );
    fromEvent(this.inputDolar.nativeElement, "keyup").pipe(takeUntil(this.destroy$)).subscribe(
      e=> {this.calculate(this.dolares, "USD"); }
    );
    fromEvent(this.inputEuro.nativeElement, "keyup").pipe(takeUntil(this.destroy$)).subscribe(
      e=> {this.calculate(this.euros, "EUR");  }
    )

  }
  ngOnDestroy(){
    this.destroy$.next();
  }

}
