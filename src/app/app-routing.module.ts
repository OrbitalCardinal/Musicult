import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NowPlayingBarComponent } from './components/now-playing-bar/now-playing-bar.component';
import { SignUpComponent } from './components/signup/signup.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path:'signup', component: SignUpComponent },
  { path:'mainview', component: MainViewComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'now-playing', component: NowPlayingBarComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
