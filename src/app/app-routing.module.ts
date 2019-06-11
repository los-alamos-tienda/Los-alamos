import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },

  {
    path: 'store',
    loadChildren: './store/store.module#StoreModule'
  },
  {
    path: 'lista',
    loadChildren: './lista/lista.module#ListaModule'
  },
  {
    path: 'carrito',
    loadChildren: './carrito/carrito.module#CarritoModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
