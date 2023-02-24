import { Component, OnInit } from '@angular/core';
import { cardInfo } from 'src/app/models/cardInfo';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  cards: cardInfo[] = [
    {
      header: "University of California Merced",
      lSubtitle: "B.S. Computer Science & Engineering",
      rSubtitle: "August 2018 - May 2022",
      listHeader: "Relevant Coursework",
      list2Header: "Other Coursework",
      body: [
        "Data Structures",
        "Operating Systems",
        "Database Systems",
        "Software Engineering",
        "Computer Architecture",
        "Object Oriented Programming",
        "Algorithm Design and Analysis",
        "Intro to Artificial Intelligence",
        "Intro to Digital Image Process"
      ],
      body2: [
        "Circuit Theory",
        "Making Electronic Music",
        "Engineering Economic Analysis",
        "Spatial Analysis and Modeling"
      ],
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
