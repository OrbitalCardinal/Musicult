import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';



import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NowPlayingBarComponent } from './components/now-playing-bar/now-playing-bar.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { SongcardComponent } from './components/songcard/songcard.component';
import { AppRoutingModule } from './app-routing.module';


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
    SignUpComponent,
    SongcardComponent,
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
