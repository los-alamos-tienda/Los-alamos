import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

import { Productos } from '../modelos/Productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  ItemCollection: AngularFirestoreCollection<Productos>;
  productos: Observable<Productos[]>;
  
  constructor(public product: AngularFirestore) { 

    this.productos = this.product.collection('productos').valueChanges();

  }

  getProductos(){
    return this.productos;
  }
    
}

