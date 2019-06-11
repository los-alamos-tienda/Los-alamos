import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/producto';
import {ProductosService} from '../services/productos.service';
import * as M from 'node_modules/materialize-css/dist/js/materialize.min.js';
import {AngularFireStorage} from '@angular/fire/storage';
import {NgForm} from '@angular/forms/src/directives/ng_form';
import {finalize} from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'iso-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  productos: Producto[];


  constructor(private productosService : ProductosService) { }

  filterPro = '';

  ngOnInit() {
    this.productosService.getProductos().subscribe(productos=>{
      this.productos = productos;
      console.log('productos',this.productos);
    });
  }

}
