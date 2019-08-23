import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { WebComponent } from './projects/web/web.component';
import { WebVitrineComponent } from './projects/web/web-vitrine/web-vitrine.component'
import { AndroidComponent } from './projects/android/android.component';
import { GamesComponent } from './projects/games/games.component';
import { ProjectsComponent } from './projects/projects.component';
import { JunglejumpComponent } from './projects/games/junglejump/junglejump.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: CvComponent },

  // projects
  { path: 'projects', component: ProjectsComponent },

    { path: 'projects/web', component: WebComponent },
    { path: 'projects/web/vitrine', component: WebVitrineComponent },

    { path: 'projects/android', component: AndroidComponent },

    { path: 'projects/games', component: GamesComponent },
    { path: 'projects/games/junglejump', component: JunglejumpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }