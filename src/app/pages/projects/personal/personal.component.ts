import { Component } from '@angular/core';
import { cardInfo } from 'src/app/models/cardInfo';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {

  cards: cardInfo[] = [
    {
      header: 'Personal Website',
      headerSubtitle: 'Github',
      subtitleLink: 'https://github.com/Tristen-Trias/Personal-Website',
      listHeader: 'Angular 15, Bootstrap, HTML, CSS, Typescript',
      body: ['bullet']
    },
    {
      header: 'Matchmaking Discord App',
      listHeader: 'Python, SQL, Discord API',
      body: ['bullet']
    },
    {
      header: 'Amazon Purchase Bot',
      listHeader: 'Python',
      body: ['bullet']
    },
    {
      header: 'Untitled Unity Game',
      listHeader: 'Unity, C#',
      body: ['bullet']
    }
  ]

  constructor() { }


}
