import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NowPlayingBarComponent } from './now-playing-bar/now-playing-bar.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'now-playing', component: NowPlayingBarComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
