import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignUpComponent {

  constructor(private _router: Router, private _afAuth: AngularFireAuth){}

  username='';
  password='';
  confirmPassword='';

  signUp() {
    if(this.password == this.confirmPassword) {
      this._afAuth.createUserWithEmailAndPassword(this.username, this.password).then(() => {
        firebase.auth().currentUser.sendEmailVerification();
        this._router.navigate(['/']);
      });
    }
  }
}
