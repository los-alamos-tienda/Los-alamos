import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/shared/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private db: AngularFirestore) { }


  getProductos(): Observable <Producto []> {
    return this.db.collection<Producto>('productos').valueChanges();
  }
}
