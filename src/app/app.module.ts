import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import {AngularFireModule} from '@angular/fire'; 
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';
//import { PrincipalComponent } from './home/principal/principal.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,AppRoutingModule, LayoutModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
