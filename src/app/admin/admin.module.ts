
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }        from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PhotoalbumsComponent } from './photoalbums/photoalbums.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';

import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';

import { CrudOperationsService } from './services/crud-operations.service';
import { CountryTableComponent } from './country-table/country-table.component';
import { CountryCreateComponent } from './country-create/country-create.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    DepartmentsComponent,
    PhotoalbumsComponent,
    HomeComponent,
    NewsComponent,
    PublicationsComponent,
    CountriesComponent,
    CountryComponent,
    CountryTableComponent,
    CountryCreateComponent,
    UserTableComponent,
    UserCreateComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    CrudOperationsService,
  ]
})
export class AdminModule { }
