import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
<<<<<<< HEAD
import { ListaDatosComponent } from './lista-datos/lista-datos.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
=======
//import { PrincipalComponent } from './home/principal/principal.component';
>>>>>>> 2bcde71581b744f5c14e78739a10b5ad86d8b1ac

@NgModule({
  declarations: [AppComponent, ListaDatosComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, MatTableModule, MatPaginatorModule, MatSortModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
