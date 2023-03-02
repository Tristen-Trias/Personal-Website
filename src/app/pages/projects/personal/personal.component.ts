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
      lSubtitle: 'February 2023 - Present',
      subtitleLink: 'https://github.com/Tristen-Trias/Personal-Website',
      listHeader: 'Angular 15, Bootstrap, HTML, CSS, Typescript',
      body: [
              'Designed and personalized website in order to display personal information',
              'Developed using Angular 15, Angular Material, and Bootstrap 5 along with Typescript, CSS, and HTML',
          ]
    },
    {
      header: 'Untitled Unity Game',
      listHeader: 'Unity, C#',
      lSubtitle: 'January 2023',
      body: [
        'Developed a 2D platformer game using Unity and C#',
        'Created a character controller that allows the player to move and jump',
        'Implemented collision detection to allow the player to interact with the environment'
      ]
    },
    {
      header: 'Matchmaking Discord App',
      listHeader: 'Python, SQL, Discord API',
      lSubtitle: 'February 2022',
      body: [
              'Designed a chat room bot in order to take in user commands from Discord server containing multiple users',
              'Incorporated Discord API to track and display specific message or user information',
              'Takes information from game API and balances teams based on each player\'s skill level'
          ]
    },
    {
      header: 'Amazon Purchase Bot',
      listHeader: 'Python',
      lSubtitle: 'September 2020',
      body: [
        'Created a bot that automatically purchases items from Amazon',
        'Developed using Python in order to actively refresh the page and purchase the item when it is in stock',
        'Utilized Python\'s smtplib to automatically send an email to the user when item is purchased'
      ]
    },
  ]

  constructor() { }


}
