import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualizarComponent } from './visualizar/visualizar.component';

const routes: Routes = [
  {
  path: 'visualizar',
  component: VisualizarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
