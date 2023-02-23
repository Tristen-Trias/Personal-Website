import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { 

  }

  title?: string;
  content?: string;
  title2?: string;
  content2?: string;

  ngOnInit(): void {
    this.title = 'Hello';
    this.content = 'welcome to my site';
    this.title2 = 'card2';
    this.content2 = 'content2';
  }


  //There has to be a way to put all of these into one function
  //and pass the route as a parameter
  //but I don't know how to do that yet
  //so I'm just going to copy and paste this for now
  //and come back to it later

  //TODO: Possibly make the cards into a 2d array, and then loop through it in the html

  onAboutClick(): void {
    this.router.navigate(['/about']);
  }

  onProjectsClick(): void {
    this.router.navigate(['/projects']);
  }

  onEducationClick(): void {
    this.router.navigate(['/education']);
  }

  onHistoryClick(): void {
    this.router.navigate(['/history']);
  }

  onHobbiesClick(): void {
    this.router.navigate(['/hobbies']);
  }

  onContactClick(): void {
    this.router.navigate(['/contact']);
  }

  onUpdatesClick(): void {
    this.router.navigate(['/updates']);
  }

}
