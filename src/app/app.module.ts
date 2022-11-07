import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TopPagesComponent } from './pages/top-pages/top-pages.component';
import { AnimePagesComponent } from './pages/anime-pages/anime-pages.component';
import { MangaPagesComponent } from './pages/manga-pages/manga-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainPageComponent,
    TopPagesComponent,
    AnimePagesComponent,
    MangaPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
