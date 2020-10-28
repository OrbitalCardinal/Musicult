import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
import { ProfilePageComponent } from './components/profile-page/profile-page.component'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon/';
import { PlaylistsPageComponent } from './components/playlists-page/playlists-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component'
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { Playbar } from './components/playbar/playbar.component';
import { SongCardComponent } from './components/songcard/songcard.component';
import { HomePageComponent } from './components/home-page/home-page.component';


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
    ProfilePageComponent,
    PlaylistsPageComponent,
    SearchPageComponent,
    SettingsPageComponent,
    HomePageComponent,
    Playbar,
    SongCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatIconModule, // storage
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
