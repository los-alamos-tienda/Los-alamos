import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { BanadoresComponent } from './banadores/banadores.component';
import { GorrasComponent } from './gorras/gorras.component';
import { LentesComponent } from './lentes/lentes.component';

const routes: Routes = [
  {
    path: 'accesorios',
    component: AccesoriosComponent
  },
  {
    path: 'banadores',
    component: BanadoresComponent
  },
  {
    path: 'gorras',
    component: GorrasComponent
  },
  {
    path: 'lentes',
    component: LentesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaRoutingModule { }
