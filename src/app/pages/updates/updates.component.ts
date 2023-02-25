import { Component, OnInit } from '@angular/core';
import { cardInfo } from 'src/app/models/cardInfo';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {

  cards: cardInfo[] = [
    {
      header: "2/21",
      body: [
        "Added updates page",
        "Updated to Angular 15",
        "Added small animations to buttons on home page"
      ]
    },
    {
      header: "2/22",
      body: [
        "Added new projects to page",
      ]
    },
    {
      header: "2/23",
      body: [
        "Added buttons to contact page",
        "Condensed cards into one component",
        "Modified pages to adapt to new condensed cards"
      ]
    },
    {
      header: "2/24",
      body: [
        "Modified Projects page",
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
