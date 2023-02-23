import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input () title?: string;
  @Input () content?: string;
  @Input () icon?: string;
  @Input () size?: number;

  ngOnInit(): void {
  }

}
