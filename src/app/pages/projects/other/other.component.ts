import { Component } from '@angular/core';
import { cardInfo } from 'src/app/models/cardInfo';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent {

  cards: cardInfo[] = [
    {
      header: 'Custom Keyboards',
      listHeader: 'C, Arduino, QMK, Soldering',
      body: ['bullet']
    },
    {
      header: 'PhobGCC',
      listHeader: 'Arduino, Soldering',
      body: ['bullet']
    },
    {
      header: 'Custom Personal Computer',
      listHeader: 'Relevant Heading',
      body: ['bullet']
    },
    {
      header: 'Video Editing',
      listHeader: 'Vegas Pro 14',
      body: ['bullet']
    }
  ];

  constructor() { }


}
