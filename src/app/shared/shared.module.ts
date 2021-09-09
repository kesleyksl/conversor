import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { MoneyServiceService } from './services/money-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MaterialModule,
    RouterModule
    
  ],
  exports:[
    MaterialModule,
    HeaderComponent,
    SidenavComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    MoneyServiceService
  ]
})
export class SharedModule { }
