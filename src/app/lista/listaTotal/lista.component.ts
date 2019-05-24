import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Productos } from '../../modelos/Productos';

import { from } from 'rxjs';
@Component({
  selector: 'iso-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  productos: Productos[];

  constructor(private productoServicio: ProductosService) { }

  ngOnInit() {
    this.productoServicio.getProductos().subscribe(productos =>{
      this.productos = productos;
    });
  }

}
