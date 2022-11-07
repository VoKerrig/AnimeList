import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimePagesComponent } from './pages/anime-pages/anime-pages.component';
import { MangaPagesComponent } from './pages/manga-pages/manga-pages.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TopPagesComponent } from './pages/top-pages/top-pages.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'anime', component: AnimePagesComponent },
  { path: 'manga', component: MangaPagesComponent },
  { path: 'top', component: TopPagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
