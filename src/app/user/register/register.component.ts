import { AuthService } from './../../services/auth.service';
import { Route, Router, CanActivateChild } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'iso-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }
  public email: string = '';
  public password: string = '';
  ngOnInit() {
  }
onAddUser() {
  this.authService.registerUser(this.email, this.password)
  .then((res) => {
    this.router.navigate(['home']);
  }).catch(err => console.log('err', err.message));
}

  onLoginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.router.navigate(['register']);
  }
  onLoginFacebook() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  onLogout() {
    this.afAuth.auth.signOut();
  }

}
