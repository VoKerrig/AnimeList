import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datum, RootObject } from 'src/app/Interfaces/seasonNow';

enum Anime {
  topAnime = 'https://api.jikan.moe/v4/top/anime'
}

@Component({
  selector: 'app-anime-pages',
  templateUrl: './anime-pages.component.html',
  styleUrls: ['./anime-pages.component.scss']
})
export class AnimePagesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  index = 0;
  items: Datum [] = [];

  ngOnInit(): void {
    this.http.get<RootObject>(Anime.topAnime).subscribe((value: RootObject) => {
      console.log(value.data[0].title)
      this.items = value.data;
    })
  }

}
