import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [AppComponent, ListaComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, MatTableModule, MatPaginatorModule, MatSortModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
