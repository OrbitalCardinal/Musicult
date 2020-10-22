import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NowPlayingBarComponent } from './now-playing-bar/now-playing-bar.component';
import { MainViewComponent } from './main-view/main-view.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';


var firebaseConfig = {
  apiKey: "AIzaSyB_imvC8bkdRcTCXOs2aVHSXuBvpKbhLF0",
  authDomain: "musicult-74081.firebaseapp.com",
  databaseURL: "https://musicult-74081.firebaseio.com",
  projectId: "musicult-74081",
  storageBucket: "musicult-74081.appspot.com",
  messagingSenderId: "1091219199093",
  appId: "1:1091219199093:web:16c2f86511310d08d0543c"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NowPlayingBarComponent,
    MainViewComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
