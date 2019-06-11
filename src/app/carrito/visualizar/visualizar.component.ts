import { Component } from '@angular/core';

@Component({
  selector: 'iso-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent {

  constructor(){

    this.grabar_localstorage();
    this.obtener_localstorage();
  }


  obtener_localstorage(){

  
    let producto=localStorage.getItem("producto");
     console.log(producto);

   }


  grabar_localstorage(){

    let producto = {
      nombre:"gafas arena",
      Genero:"N/A",
      Cantidad: 18,
      Precio: 14.99
    }

  localStorage.setItem("producto",JSON.stringify(producto));

  }
}

