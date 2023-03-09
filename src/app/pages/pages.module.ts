import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material-module';
import { AppSharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent, ModalComponent } from './about/about.component';
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
    ModalComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppSharedModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    EducationComponent,
    HistoryComponent,
    HobbiesComponent,
    ContactComponent,
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class PagesModule { }
