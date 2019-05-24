import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {StoreModule} from './store/store.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import {AngularFireModule} from '@angular/fire'; 
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import {FormsModule} from '@angular/forms';
//import { PrincipalComponent } from './home/principal/principal.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,AppRoutingModule, LayoutModule,AngularFireStorageModule,FormsModule],
  bootstrap: [AppComponent],
  exports: [FormsModule]
})
export class AppModule {}
