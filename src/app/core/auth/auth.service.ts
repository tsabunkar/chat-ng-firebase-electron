import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFireStorage: AngularFireStorage,
    private router: Router
  ) {}

  signUpNewUser(userCredentials) {
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(userCredentials.email, userCredentials.password)
      .then(user => {
        // update the displayname and Profile pic
        this.angularFireAuth.auth.currentUser.updateProfile({
          displayName: userCredentials.displayName,
          photoURL: environment.globalConstants.defualtProfilePic
        });
      });

    // this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signInWithGoogle() {
    this.angularFireAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // TODO Singin with Google om AngularFire
  // TODO : https://fireship.io/lessons/angularfire-google-oauth/
  signInWithLocalCredentials(userCredentials) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(userCredentials.email, userCredentials.password);
  }

  logout() {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['signin']);
  }
}
