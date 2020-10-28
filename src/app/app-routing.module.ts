import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NowPlayingBarComponent } from './components/now-playing-bar/now-playing-bar.component';
import { PlaylistsPageComponent } from './components/playlists-page/playlists-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { SignUpComponent } from './components/signup/signup.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'mainview', component: MainViewComponent, children: [
    {
      path: 'home',
      component: HomePageComponent
    },
    {
      path: 'profile',
      component: ProfilePageComponent
    },
    {
      path: 'playlists',
      component: PlaylistsPageComponent
    },
    {
      path: 'search',
      component: SearchPageComponent
    },
    {
      path: 'settings',
      component: SettingsPageComponent
    }
] },
  { path: 'navbar', component: NavbarComponent },
  { path: 'now-playing', component: NowPlayingBarComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
