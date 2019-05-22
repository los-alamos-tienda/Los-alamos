import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/shared/models/producto';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'iso-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products$ : Observable<Producto[]>;
  productos : Producto[];
  constructor(private productsService : ProductosService) { }

  ngOnInit() : void{
    this.products$ = this.productsService.getProductos();
    this.products$.subscribe( productos => {
      this.productos = productos;
      console.log(this.productos);
    })
  }

}
