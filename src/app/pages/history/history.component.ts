import { Component, OnInit } from '@angular/core';
import { cardInfo } from 'src/app/models/cardInfo';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent implements OnInit {

  cards: cardInfo[] = [
    {
      header: "E&J Gallo Winery",
      headerSubtitle: "Modesto, CA",
      lSubtitle: "IT Program Analyst Intern",
      rSubtitle: "June 2022 - September 2022",
      listHeader: "Responsibilities",
      body: [
        "Updated and redesigned company applications to comply with industry standards using Angular 13",
        "Strategized and implemented new features in collaboration with upper management",
        "Analyzed internal backend Spring Boot Java implementations and databases and applied enhancements to solve business needs that improved search times by 15%",
        "Diagnosed system failure reported by end users through identification of system bugs and implementation of permanent solutions",
      ]
    },
    {
      header: "South Coast Industrial Door",
      headerSubtitle: "Corona, CA",
      lSubtitle: "Tech Support",
      rSubtitle: "June 2020 - December 2020",
      listHeader: "Responsibilities",
      body: [
        "Configured hardware and software on custom built computers for new employees",
        "Identified, evaluated and solved user reported system failures through problem solving skills",
        "Installed and maintained wireless network to improve wireless speeds and company uptime by 20%",
        "Rolled out antivirus software updates to employee workstations and applied server patches to thwart threats from penetrating networks.",
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

  addCard(): void {

  }

}
