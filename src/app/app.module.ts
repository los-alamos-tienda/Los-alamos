import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ListaComponent } from './layout/lista/lista.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({

  declarations: [AppComponent, 
    ListaComponent],

  imports: [BrowserModule, 
    AppRoutingModule, 
    LayoutModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],

  bootstrap: [AppComponent]
  
})
export class AppModule {}
