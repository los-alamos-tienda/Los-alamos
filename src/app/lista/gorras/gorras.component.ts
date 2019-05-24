import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Productos } from '../../modelos/Productos';

@Component({
  selector: 'iso-gorras',
  templateUrl: './gorras.component.html',
  styleUrls: ['./gorras.component.css']
})
export class GorrasComponent implements OnInit {

  productos: Productos[];

  constructor(private productoServicio: ProductosService) { }

  ngOnInit() {
    this.productoServicio.getProductos().subscribe(productos =>{
      this.productos = productos;
    });
  }

}
