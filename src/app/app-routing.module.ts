import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { WebComponent } from './projects/web/web.component';
import { WebVitrineComponent } from './projects/web/web-vitrine/web-vitrine.component'
import { AndroidComponent } from './projects/android/android.component';
import { GamesComponent } from './projects/games/games.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: CvComponent },

  { path: 'web', component: WebComponent },
  { path: 'web/vitrine', component: WebVitrineComponent },

  { path: 'android', component: AndroidComponent },

  { path: 'games', component: GamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }