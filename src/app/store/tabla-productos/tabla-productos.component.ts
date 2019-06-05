import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto';
import {ProductosService} from '../services/productos.service';

@Component({
  selector: 'iso-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {
  productos: Producto[];
  editState: boolean = false;
  productoToEdit: Producto;

  constructor(private productosService : ProductosService) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(productos=>{
      this.productos = productos;
      console.log('productos',this.productos);
    });
  
  }
  editProducto(event, producto : Producto){
    this.editState = true;
    this.productoToEdit = producto;
  }

  clearState(){
    this.editState = false;
    this.productoToEdit = null;

  }


}
