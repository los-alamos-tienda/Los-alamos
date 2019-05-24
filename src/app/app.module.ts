import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ListaComponent } from './lista/listaTotal/lista.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { ProductosService } from './lista/productos.service';
import { BanadoresComponent } from './lista/banadores/banadores.component';
import { GorrasComponent } from './lista/gorras/gorras.component';
import { LentesComponent } from './lista/lentes/lentes.component';
import { AccesoriosComponent } from './lista/accesorios/accesorios.component';




@NgModule({

  declarations: [AppComponent, 
    ListaComponent, BanadoresComponent, GorrasComponent, LentesComponent, AccesoriosComponent],

  imports: [BrowserModule, 
    AppRoutingModule, 
    LayoutModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],

  providers: [ProductosService],

  bootstrap: [AppComponent]

})
export class AppModule {}
