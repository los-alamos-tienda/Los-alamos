import { Component, OnInit } from '@angular/core';
import {Producto } from '../../shared/models/producto';
import * as M from 'node_modules/materialize-css/dist/js/materialize.min.js';
import {AngularFireStorage} from '@angular/fire/storage';
import {ProductosService} from '../services/productos.service';
import {NgForm} from '@angular/forms/src/directives/ng_form';
@Component({
  selector: 'iso-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {

  producto: Producto = {
    idProducto: '',
    nombre : '',
    tipoProducto: '',
    fecha : null,
    imagen: '',
    cantidad: null ,
    precio : null,
    sexo: '',
    sectorEdad: '',
    talla: '',
    descripcion: ''


  }
  options = {
    format : 'mmm dd, yyyy'
  };


  constructor(private productoService: ProductosService ,private storage: AngularFireStorage) { }

  ngOnInit() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    var elems1 = document.querySelectorAll('.datepicker');
    var instances1 = M.Datepicker.init(elems1, this.options);
    this.selectSexo();
    this.productoService.getProductos().subscribe(productos =>{
      console.log(productos);
    })
    
         
  }
  onUpload(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filepath = 'upload/imagen.png';
    const ref = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, file);

    // console.log('subir' , e.target.files[0]);
  }
  onRegistrarProducto(myForm: NgForm){
    const fechaNow = Date.now();
    this.producto.fecha = fechaNow;
    this.productoService.addProducto(this.producto);


  }
  selectSexo(){
    var elemsSexo = document.querySelectorAll('select');
    var instancesSexo = M.FormSelect.init(elemsSexo);
  }
}
