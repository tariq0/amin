import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';


@Injectable()
export class UsersService extends DataService{

  constructor(private httpClient: HttpClient) { 
    super(
      httpClient,
      "http://localhost:3000/users"
      );
  }
}
