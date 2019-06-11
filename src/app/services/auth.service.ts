//import { UserModule } from './../user/user.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from 'firebase';
import { map} from 'rxjs/operators';
import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class AuthService
  { user : User ;
    loginFailed = new BehaviorSubject<boolean>(false);
    registerFailed = new BehaviorSubject < boolean >(false);
    userLoggedOut = new BehaviorSubject<boolean>(false);

    constructor(
      private angularFire: AngularFireAuth,
      private router: Router
    ) {
      angularFire.authState.subscribe(user => {
        this.user = user;
      });
    }

    logIn(email: string, password: string) {
      this.angularFire.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          if (email==='admin@gmail.com' && password==='Admin123!') {
            this.router.navigate(['admin']);
          }else{
            this.router.navigate(['/home']);
          }
        })
        .catch(_err => {
          this.loginFailed.next(true);
        });
    }

    register(email: string, password: string) {
      this.angularFire.auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.router.navigate(['/home']);
        })
        .catch(err => {
          this.registerFailed.next(true);

        });
    }

    logOut() {
      this.angularFire.auth.signOut()
        .then(() => {
          this.userLoggedOut.next(true);
          this.router.navigate(['/home']);
        });
    }

    getUserLoggedOutStatus(): Observable<boolean> {
      return this.userLoggedOut.asObservable();
    }

    getLoginStatus(): Observable<boolean> {
      return this.loginFailed.asObservable();
    }

    getRegisterStatus(): Observable<boolean> {
      return this.registerFailed.asObservable();
    }

    resetLoginRegisterStatus() {
      this.loginFailed.next(false);
      this.registerFailed.next(false);
      this.userLoggedOut.next(false);
    }


  //   constructor(private afsAuth: AngularFireAuth) { }

//   registerUser(email: string, pass: string) {
//     return new Promise((resolve, reject) => {
//       this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
//       .then(userData => resolve(userData), err => reject (err));
//     });
//   }

// //   loginEmailUser(email: string, pass: string) {
// //   return new Promise((resolve, reject) => {
// //     this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
// //     .then(userData => resolve(userData), err => reject (err));
// //   });
// // }
// loginFacebookUser() {}
// loginGoogleUser() {}
// logoutUser() {}



// isAuth() {
//   // tslint:disable-next-line:no-shadowed-variable
//   return this.afsAuth.authState.pipe(map(auth => auth));
// }

}
