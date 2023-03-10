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
    },
    {
      header: "2/27",
      body: [
        "Small improvements",
      ]
    },
    {
      header: "3/1",
      body: [
        "Updated project page information",
      ]
    },
    {
      header: "3/2",
      body: [
        "Started moving information to json files",
      ]
    },
    {
      header: "3/8",
      body: [
        "Testing out modals in order to add new cards to the page",
      ]
    },
    {
      header: "3/9",
      body: [
        "Linked modal to create card",
        "TODO: create a backend to store information",
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
