import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Productos } from '../modelos/Productos';
// import {ProductosService} from '../../store/services/productos.service';

@Component({
  selector: 'iso-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {

  productos: Productos[];

  constructor(private productoServicio: ProductosService) { }

  ngOnInit() {
    this.productoServicio.getProductos().subscribe(productos =>{
      this.productos = productos;
    });
  }

}
