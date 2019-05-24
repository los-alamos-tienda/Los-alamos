import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Productos } from '../../modelos/Productos';


@Component({
  selector: 'iso-banadores',
  templateUrl: './banadores.component.html',
  styleUrls: ['./banadores.component.css']
})
export class BanadoresComponent implements OnInit {

  productos: Productos[];

  constructor(private productoServicio: ProductosService) { }

  ngOnInit() {
    this.productoServicio.getProductos().subscribe(productos =>{
      this.productos = productos;
    });
  }

}
