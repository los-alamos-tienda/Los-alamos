import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductosService} from './services/productos.service'
import { StoreRoutingModule } from './store-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { RegistroProductoComponent } from './registro-producto/registro-producto.component';
import {AngularFireModule} from '@angular/fire'; 
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [CatalogComponent,RegistroProductoComponent, TablaProductosComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    AngularFireModule,AngularFireStorageModule,AngularFirestoreModule,FormsModule
  ],
  providers: [ProductosService]
})
export class StoreModule { }
