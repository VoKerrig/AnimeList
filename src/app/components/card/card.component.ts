import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

enum CharList {
  characters = 'https://api.jikan.moe/v4/characters'
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  response: any;
  q: string = '';

  constructor(private http: HttpClient) { }

  searchName() {
    this.http.get(CharList.characters + '?q=' + this.q)
    .subscribe((response)=> {
      this.response = response;
      console.log(this.response);
    })
  }

}
