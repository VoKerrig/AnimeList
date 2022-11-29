import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datum, RootObject } from 'src/app/Interfaces/api';

enum Manga {
  topManga = 'https://api.jikan.moe/v4/top/manga'
}

@Component({
  selector: 'app-manga-pages',
  templateUrl: './manga-pages.component.html',
  styleUrls: ['./manga-pages.component.scss']
})
export class MangaPagesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  index = 0;
  items: Datum [] = [];

  ngOnInit(): void {
    this.http.get<RootObject>(Manga.topManga).subscribe((value: RootObject) => {
      console.log(value.data[0].title)
      this.items = value.data;
    })
  }

}
