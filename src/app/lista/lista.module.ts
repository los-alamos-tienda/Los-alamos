import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { BanadoresComponent } from './banadores/banadores.component';
import { GorrasComponent } from './gorras/gorras.component';
import { LentesComponent } from './lentes/lentes.component';
import {AngularFireModule} from '@angular/fire'; 
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';

@NgModule({
  declarations: [AccesoriosComponent, BanadoresComponent, GorrasComponent, LentesComponent],
  imports: [
    CommonModule,
    ListaRoutingModule,
    AngularFireModule,AngularFireStorageModule,AngularFirestoreModule
  ]
})
export class ListaModule { }
