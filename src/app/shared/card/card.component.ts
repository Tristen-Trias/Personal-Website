import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input () header?: string;
  @Input () headerSubtitle?: string;
  @Input () subtitleLink?: string;
  @Input () lSubtitle?: string;
  @Input () rSubtitle?: string;
  @Input () listHeader?: string;
  @Input () list2Header?: string;
  @Input () body?: string[];
  @Input () body2?: string[];

  ngOnInit(): void {
  }

}
