import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { NowPlayingBarComponent } from './now-playing-bar/now-playing-bar.component';

const routes: Routes = [
  { path: '', component: MainViewComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
