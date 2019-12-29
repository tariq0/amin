import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PhotoalbumsComponent } from './photoalbums/photoalbums.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';


@NgModule({
  declarations: [AdminComponent, UsersComponent, DepartmentsComponent, PhotoalbumsComponent,HomeComponent, NewsComponent, PublicationsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
