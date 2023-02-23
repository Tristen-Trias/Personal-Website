import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material-module';
import { AppSharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { HistoryComponent } from './history/history.component';
import { ContactComponent } from './contact/contact.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { UpdatesComponent } from './updates/updates.component';
import { PersonalComponent } from './projects/personal/personal.component';
import { ClassComponent } from './projects/class/class.component';
import { OtherComponent } from './projects/other/other.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    EducationComponent,
    HistoryComponent,
    HobbiesComponent,
    ContactComponent,
    UpdatesComponent,
    PersonalComponent,
    ClassComponent,
    OtherComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppSharedModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    EducationComponent,
    HistoryComponent,
    HobbiesComponent,
    ContactComponent,
  ]
})
export class PagesModule { }
