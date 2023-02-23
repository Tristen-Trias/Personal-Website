import { Component, OnInit } from '@angular/core';
import { cardInfo } from 'src/app/models/cardInfo';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent implements OnInit {

  //TODO: Add cards to this array

  cards: cardInfo[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  addCard(): void {
    this.cards.push({
      company: 'Company Name',
      title: 'Job Title',
      date: 'Date',
      content: ['Content'],
      image: 'Image',
      link: 'Link'
    });
  }

}
