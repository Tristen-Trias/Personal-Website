import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  list = [
    new List('Home', 'fa-solid fa-house', '/home'),
    new List('About', 'fa-solid fa-circle-question', '/about'),
    new List('Projects', 'fa-solid fa-diagram-project', '/projects'),
    new List('Education', 'fa-solid fa-user-graduate', '/education'),
    new List('Work Experience', 'fa-solid fa-briefcase', '/history'),
    new List('Hobbies', 'fa-solid fa-gamepad', '/hobbies'),
    new List('Contact', 'fa-solid fa-address-card', '/contact'),
    new List('Updates', 'fa-solid fa-circle-up', '/updates')
  ];

  constructor(private router: Router ) {
    
  }

  ngOnChanges(): void {
    
  }

  ngOnInit(): void {
  }

}
