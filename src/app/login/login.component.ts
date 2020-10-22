import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private _router: Router,private _afAuth: AngularFireAuth){}

  email='';
  password='';

  login() {
    this._afAuth.signInWithEmailAndPassword(this.email,this.password).then((user) => {
      if(firebase.auth().currentUser.emailVerified) {
        this._router.navigate(['/mainview']);
      }
    }).catch((e) => {
      // console.log(e);
    });
  }
}
