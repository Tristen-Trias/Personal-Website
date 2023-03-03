import { Component, OnInit } from '@angular/core';
import { cardInfo } from 'src/app/models/cardInfo';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  //TODO: create json files for everything
  private _jsonURL = 'assets/data/test.json';

  cards?: cardInfo[];

  constructor(private http: HttpClient) {
    this.fillCards();
  }

  ngOnInit(): void {
  }

  fillCards(): void {
    this.getJSON().subscribe(data => {
      this.cards = data.card;
    });
  }

  getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

}
