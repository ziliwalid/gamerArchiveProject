import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameAbyssArchivesComponent } from './components/game-abyss-archives/game-abyss-archives.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path :'GameArchives', component: GameAbyssArchivesComponent},
  {path:'Home', component: HomeComponent},
  { path:'' , redirectTo :'/Home', pathMatch :'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
