import { Component, OnInit } from '@angular/core'
import { List } from 'src/app/models/list';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  title?: String;

  //TODO: Add a way to dynamically add items to the list
  //TODO: Add a way to dynamically change the title
  //TODO: Change list to interface instead of class
  
  list: List[] = [
    {
      item: 'Home', 
      icon: 'fa-solid fa-house', 
      link: '/home'
    },
    {
      item: 'About', 
      icon: 'fa-solid fa-circle-question', 
      link: '/about'
    },
    {
      item: 'Projects', 
      icon: 'fa-solid fa-diagram-project', 
      link: '/projects'
    },
    {
      item: 'Education', 
      icon: 'fa-solid fa-user-graduate', 
      link: '/education'
    },
    {
      item: 'Work Experience', 
      icon: 'fa-solid fa-briefcase', 
      link: '/history'
    },
    {
      item: 'Hobbies', 
      icon: 'fa-solid fa-gamepad', 
      link: '/hobbies'
    },
    {
      item: 'Contact', 
      icon: 'fa-solid fa-address-card', 
      link: '/contact'
    },
    {
      item: 'Updates', 
      icon: 'fa-solid fa-circle-up', 
      link: '/updates'
    },
  ];

  constructor() {
    
  }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
    
  }

}
