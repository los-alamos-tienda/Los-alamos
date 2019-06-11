import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { RegistroProductoComponent } from './registro-producto/registro-producto.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'registro',
    component : RegistroProductoComponent
  },
  {
    path: 'filter',
    component : FilterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
