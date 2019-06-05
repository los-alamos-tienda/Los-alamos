import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Productos } from '../modelos/Productos';

@Component({
  selector: 'iso-lentes',
  templateUrl: './lentes.component.html',
  styleUrls: ['./lentes.component.css']
})
export class LentesComponent implements OnInit {

  productos: Productos[];

  constructor(private productoServicio: ProductosService) { }

  ngOnInit() {
    this.productoServicio.getProductos().subscribe(productos =>{
      this.productos = productos;
    });
  }

}
