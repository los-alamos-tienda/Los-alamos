import { AngularFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

import { environment } from './../environments/environment';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuth} from '@angular/fire/auth';





@NgModule({
  declarations: [AppComponent, ],
  imports: [BrowserModule, AppRoutingModule, LayoutModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule],
  providers: [AngularFireAuth,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
