import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {Producto } from '../../shared/models/producto';
import * as M from 'node_modules/materialize-css/dist/js/materialize.min.js';
import {AngularFireStorage} from '@angular/fire/storage';
import {ProductosService} from '../services/productos.service';
import {NgForm} from '@angular/forms/src/directives/ng_form';
import {finalize} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'iso-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {

  producto: Producto = {
    id_producto: '',
    nombre : '',
    tipo_producto: '',
    fecha : '',
    imagen: '',
    cantidad: null ,
    precio : null,
    sexo: '',
    sector_edad: '',
    talla: '',
    descripcion: ''


  }
  options = {
    // format : 'yyyy-MM-dd'
  };
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  constructor(private productoService: ProductosService ,private storage: AngularFireStorage) { }
  @ViewChild('imageProducto') inputImagenProducto : ElementRef;
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
    const idImagen = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filepath = `upload/producto_${idImagen}`;
    const ref = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
      

    console.log('subir' , e.target.files[0]);
  }
  onRegistrarProducto(myForm: NgForm){
    console.log(myForm);
    
    
    if(myForm.valid == true){
      // const fechaNow = Date.now();
      this.producto.imagen= this.inputImagenProducto.nativeElement.value
      
      // this.producto.fecha = fechaNow;
      this.productoService.addProducto(this.producto);
      myForm.resetForm();
     

    }else{
      console.log("hay un problema");
    }
    


  }
  selectSexo(){
    var elemsSexo = document.querySelectorAll('select');
    var instancesSexo = M.FormSelect.init(elemsSexo);
  }
  

}
