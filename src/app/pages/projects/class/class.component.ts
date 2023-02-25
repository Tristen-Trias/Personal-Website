import { Component } from '@angular/core';
import { cardInfo } from 'src/app/models/cardInfo';

@Component({
  selector: 'app-class-projects',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent {

  cards: cardInfo[] = [
    {
      header: 'Single Cycle MIPS Processor',
      headerSubtitle: 'Github',
      subtitleLink: 'https://github.com/Tristen-Trias/CSE-140-Project',
      lSubtitle: 'CSE 140 - Computer Architecture',
      listHeader: 'C++',
      body: ['bullet']
    },
    {
      header: 'Aim Training Game',
      headerSubtitle: 'Github',
      subtitleLink: 'https://github.com/Tristen-Trias/ClickTrainer',
      lSubtitle: 'CSE 165 - Object Oriented Programming',
      listHeader: 'Qt, C++',
      body: ['bullet']
    },
    {
      header: 'Sierra Nevada Trails App',
      headerSubtitle: 'Github',
      subtitleLink: 'https://github.com/Tristen-Trias/Sierra-Nevada-Trails-Project',
      lSubtitle: 'CSE 111 - Database Systems',
      listHeader: 'Android Studio, Kotlin, SQLite3',
      body: ['bullet']
    },
  ]

  constructor() { }
}
