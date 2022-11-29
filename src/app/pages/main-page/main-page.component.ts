import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject, Datum } from 'src/app/Interfaces/api';

enum Seasons {
  seasonNow = 'https://api.jikan.moe/v4/seasons/now'
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  index = 0;
  items: Datum [] = [];

  ngOnInit(): void {
    this.http.get<RootObject>(Seasons.seasonNow).subscribe((value: RootObject) => {
      console.log(value.data[0].title)
      this.items = value.data;
    })
  }

  itemsCount = 3;

  get rounded(): number {
    return Math.floor(this.index / this.itemsCount);
  }

  get roundedLength(): number {
    return Math.floor(this.items.length / this.itemsCount);
  }

  onIndex(index: number): void {
    this.index = index * this.itemsCount;
  }

}
