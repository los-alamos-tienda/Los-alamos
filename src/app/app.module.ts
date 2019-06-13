
import { UserService } from './services/user.service';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

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

  AngularFireDatabaseModule, LoginModule, RegisterModule, CommonModule],
  providers: [AngularFireAuth, AngularFirestore, UserService, AuthGuardService, AuthService],

  bootstrap: [AppComponent]
})
export class AppModule {}
