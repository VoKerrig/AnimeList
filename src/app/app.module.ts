import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiTextfieldControllerModule, TUI_SANITIZER, TuiSvgModule, TuiButtonModule } from "@taiga-ui/core";
import { TuiCarouselModule, TuiIslandModule, TuiPaginationModule, TuiInputModule, TuiMultiSelectModule } from "@taiga-ui/kit";
import { } from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TopPagesComponent } from './pages/top-pages/top-pages.component';
import { AnimePagesComponent } from './pages/anime-pages/anime-pages.component';
import { MangaPagesComponent } from './pages/manga-pages/manga-pages.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

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
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiCarouselModule,
      TuiIslandModule,
      TuiPaginationModule,
      TuiInputModule,
      TuiSvgModule,
      TuiMultiSelectModule,
      TuiTextfieldControllerModule,
      TuiButtonModule 
      // tuiKitIcons
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
