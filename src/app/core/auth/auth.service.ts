import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

// * REFER ur gist : https://gist.github.com/tsabunkar/f8cd16bcf8946132016f53faf0f2d04a
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = null;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {
    // updating the authState variable value
    this.angularFireAuth.authState.subscribe(authData => {
      this.authState = authData;
    });
  }

  currentUserId(): string {
    return this.authenticated ? this.authState.user.uid : '';
  }

  signUpNewUser(userCredentials) {
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(userCredentials.email, userCredentials.password)
      .then(user => {
        this.authState = user;

        // updating the displayname and Profile pic (for currently signuped user with default username and profile pic value)
        this.angularFireAuth.auth.currentUser
          .updateProfile({
            displayName: userCredentials.email,
            photoURL: environment.globalConstants.defualtProfilePic
          })
          .then(() => {
            this.updateUserData();
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // !Local user collections
  private updateUserData(): void {
    // Writes user name and email to realtime db -> FireStore
    // useful if your app displays information about users or for admin features

    const path = `users/${this.currentUserId}`; // Endpoint on firebase
    const statusPath = `status/${this.currentUserId}`; // Endpoint on firebase

    const userDocument = this.angularFirestore.doc(path);
    const statusDocument = this.angularFirestore.doc(statusPath);

    const data = {
      email: this.authState.user.email,
      displayName: this.authState.user.displayName,
      photoURL: this.authState.user.photoURL
    };

    // userDocument.
    userDocument.set(data);

    statusDocument.set({
      status: 'online'
    });

    this.router.navigate(['dashboard']);
  }

  logout() {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['signin']);
  }

  signInWithLocalCredentials(userCredentials) {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(userCredentials.email, userCredentials.password)
      .then(user => {
        this.authState = user;
        this.updateUserData();
      })
      .catch(err => {
        console.log(err);
      });
  }

  // !Check weather user is authenicated or not
  authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // TODO Singin with Google om AngularFire
  // TODO : https://fireship.io/lessons/angularfire-google-oauth/
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
}
