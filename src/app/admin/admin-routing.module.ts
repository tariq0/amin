import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { PhotoalbumsComponent } from './photoalbums/photoalbums.component';
import { DepartmentsComponent } from './departments/departments.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';
import { CountriesComponent } from './countries/countries.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
     path: '', 
     component: AdminComponent,
     children: [
      {path: '', component: HomeComponent},
      {path: 'users/:id', component: UserComponent},
      {path: 'users', component: UsersComponent},
      {path: 'departments', component: DepartmentsComponent},
      {path: 'photoalbums', component: PhotoalbumsComponent},
      {path: 'news', component: NewsComponent},
      {path: 'publications', component: PublicationsComponent},
      {path: 'countries/:id', component: CountryComponent, pathMatch: 'full'},
      {path: 'countries', component: CountriesComponent},
      
     ],
    
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
