import { Component, OnInit } from '@angular/core';
import { cardInfo } from 'src/app/models/cardInfo';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  //TODO: create json files for everything

  cards: cardInfo[] = [
    {
      header: "About",
      headerSubtitle: "What is this site?",
      subtitleLink: "link",
      lSubtitle: "Left subtitle",
      rSubtitle: "Right subtitle",
      listHeader: "List header",
      body: [
        "Body1",
        "Body2",
        "Body3",
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
