import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageScrollComponent } from './page-scroll/page-scroll.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavListComponent } from './side-nav-list/side-nav-list.component';
import { AppMaterialModule } from '../app-material-module';
import { AppRoutingModule } from '../app-routing.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PageScrollComponent,
    SideNavComponent,
    SideNavListComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  exports: [
    PageHeaderComponent,
    PageScrollComponent,
    SideNavComponent,
    SideNavListComponent,
    CardComponent,
  ]
})
export class AppSharedModule { }
