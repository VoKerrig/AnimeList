import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TopPagesComponent } from './pages/top-pages/top-pages.component';
import { AnimePagesComponent } from './pages/anime-pages/anime-pages.component';
import { MangaPagesComponent } from './pages/manga-pages/manga-pages.component';
import { HeaderComponent } from './components/header/header.component';
import { TuiCarouselModule, TuiIslandModule, TuiPaginationModule, TuiInputModule } from "@taiga-ui/kit";
import { TuiSvgModule } from '@taiga-ui/core';
import { tuiCoreIcons } from "@taiga-ui/icons";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainPageComponent,
    TopPagesComponent,
    AnimePagesComponent,
    MangaPagesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiCarouselModule,
      TuiIslandModule,
      TuiPaginationModule,
      TuiInputModule,
      TuiSvgModule,
      // tuiCoreIcons
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
