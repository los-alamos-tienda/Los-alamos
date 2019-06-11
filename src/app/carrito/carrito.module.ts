import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { VisualizarComponent } from './visualizar/visualizar.component';
import {Component } from '@angular/core';


@Component({

})
   export class visualizarComponent{
  
    }

   
@NgModule({
  declarations: [VisualizarComponent],
  imports: [
    CommonModule,
    CarritoRoutingModule
  ]
})
export class CarritoModule { }
