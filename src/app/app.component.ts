import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// enum CharList {
//   characters = 'https://api.jikan.moe/v4/characters'
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AnimeList';
  // response: any;
  // q: string = '';
    
  // constructor(private http: HttpClient) {
  
  
  constructor() {
  }

  // searchName() {
  //   this.http.get(CharList.characters + '?q=' + this.q)
  //   .subscribe((response)=> {
  //     this.response = response;
  //     console.log(this.response);
  //   })
  // }

}


