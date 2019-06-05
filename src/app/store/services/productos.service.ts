import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/shared/models/producto';

import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
productosCollection: AngularFirestoreCollection<Producto>;
 productos: Observable <Producto[]>;
 productoDoc : AngularFirestoreDocument<Producto>;
   

  constructor(public db: AngularFirestore) { 
    // this.productos = this.db.collection<Producto>('productos').valueChanges();
    this.productosCollection = db.collection <Producto> ('productos', ref => ref.orderBy('id_producto','asc'));
    this.productos = this.productosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as Producto;
        const id = a.payload.doc.id;
        return {id, ...data};

      }))
    );
  }

  // getProductos(): Observable <Producto []> {
  //   return this.db.collection<Producto>('productos').valueChanges();
  // }
  getProductos(){
    return this.productos;
    
  }
  addProducto(producto : Producto){
    this.productosCollection.add(producto);
    console.log('New Product');
  }
  deleteProducto(){
    console.log('Delete Product');
  }
  updateProducto(){
    console.log('Update  Product');
  }
 
 
}
