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
      lSubtitle: 'Spring 2022',
      rSubtitle: 'CSE 140 - Computer Architecture',
      listHeader: 'C++',
      body: [
            'Created to simulate a single cycle MIPS processor',
            'Processor takes in MIPS instructions from text file, performs calculations, and stores value in memory',
            'Executes ten different functions taken from designs given from class lectures'
          ]
    },
    {
      header: 'Sierra Nevada Trails App',
      headerSubtitle: 'Github',
      subtitleLink: 'https://github.com/Tristen-Trias/Sierra-Nevada-Trails-Project',
      lSubtitle: 'Spring 2022',
      rSubtitle: 'CSE 111 - Database Systems',
      listHeader: 'Android Studio, Kotlin, SQLite3',
      body: [
            'Used Android Studio, Kotlin and SQL for Databases class project',
            'Took in data for hiking trails in Sierra Nevada Mountains and displayed information for user to see',
            'Users can sort through data and find trails that match personal preferences'
          ]
    },
    {
      header: 'Aim Training Game',
      headerSubtitle: 'Github',
      subtitleLink: 'https://github.com/Tristen-Trias/ClickTrainer',
      lSubtitle: 'Spring 2021',
      rSubtitle: 'CSE 165 - Object Oriented Programming',
      listHeader: 'Qt, C++',
      body: [
            'Designed and Collaborated with other students using Github in order to create project using the Qt Framework and C++',
            'Users play a variety of small games on their computer screen in order to improve mouse accuracy for other games'
          ]
    },
    {
      header: 'Text Based Adventure RPG',
      headerSubtitle: 'Github',
      subtitleLink: 'https://github.com/Tristen-Trias/AP-CS--Final',
      lSubtitle: 'Spring 2018',
      rSubtitle: 'AP Computer Science',
      listHeader: 'Java',
      body: [
            'Created a text based adventure game using Java',
            'Users can choose from a variety of different classes and fight monsters in order to level up',
            'Users can also buy items from a shop and use them to fight monsters'
          ]
    }
  ]

  constructor() { }
}
