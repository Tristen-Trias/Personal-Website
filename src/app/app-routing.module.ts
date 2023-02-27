import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EducationComponent } from './pages/education/education.component';
import { HistoryComponent } from './pages/history/history.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UpdatesComponent } from './pages/updates/updates.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About Me' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects' },
  { path: 'education', component: EducationComponent, title: 'Education' },
  { path: 'history', component: HistoryComponent, title: 'Work History' },
  { path: 'hobbies', component: HobbiesComponent, title: 'Hobbies' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'updates', component: UpdatesComponent, title: 'Updates' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
