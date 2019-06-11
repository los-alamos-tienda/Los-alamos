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
  producto : Productos;

  constructor(private productoServicio: ProductosService) { }

  ngOnInit() {
    this.productoServicio.getProductos().subscribe(productos =>{
      this.productos = productos;
      console.log("info producto", this.productos[0]);
    });
    
  }
  getProducto(event, producto : Productos[]){
    this.productos = producto;
    console.log("info segun pos", this.productos);
    //this.añadirCarrito(this.productos);
  }
  añadirCarrito(producto :Productos[]){
   
      
        // this.producto.imagen= this.inputImagenProducto.nativeElement.value
        
        // this.producto.fecha = fechaNow;
       // this.productoServicio.addProductoCarrito(this.producto);
      
  }

}
