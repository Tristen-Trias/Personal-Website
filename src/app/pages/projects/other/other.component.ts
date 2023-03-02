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
      listHeader: 'C, QMK, Soldering',
      body: [
        'Created custom keyboards using community sourced parts and guides',
        'Programmed custom layouts and layers using QMK',
        'Soldered mechanical key switches onto custom PCB\'s',
      ]
    },
    {
      header: 'PhobGCC',
      headerSubtitle: 'Source',
      lSubtitle: 'July 2022',
      subtitleLink: 'https://github.com/PhobGCC/PhobGCC-SW',
      listHeader: 'Arduino, Soldering',
      body: [
        'Created and programmed fully customizable gamecube controllers using open source hardware and code using Arduino',
        'Soldered buttons and stick boxes onto custom PCB\'s',
        'Attached hall sensors and neodymium magnets onto stick boxes to transform physical inputs to in game actions'
      ]
    },
    {
      header: 'Custom Personal Computer',
      headerSubtitle: 'Parts List',
      lSubtitle: 'September 2020',
      subtitleLink: 'https://pcpartpicker.com/list/Bzzw2V',
      listHeader: 'Relevant Heading',
      body: [
        'Built a custom personal computer using parts from Newegg',
        'Installed and dual booted Windows 10 and Ubuntu 20.04',
        'Troubleshooted and fixed issues with hardware and software'
      ]
    },
    {
      header: 'Video Editing',
      listHeader: 'Vegas Pro 14',
      body: [
        'Created and edited videos for personal use',
        'Rendered videos in various formats for different uses'
      ]
    }
  ];

  constructor() { }


}
