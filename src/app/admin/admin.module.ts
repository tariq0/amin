import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PhotoalbumsComponent } from './photoalbums/photoalbums.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    DepartmentsComponent,
    PhotoalbumsComponent,
    HomeComponent,
    NewsComponent,
    PublicationsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  providers:[
    //DataService,
    UsersService
  ]
})
export class AdminModule { }
