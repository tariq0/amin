import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  
  constructor(private http: HttpClient, private baseURL: string) { }

  getAll(){
    console.log('get all get called \n', this.baseURL);
  }

  getBy(){
    console.log('getBy get called');
  }

  getById(id){
    console.log('getById get called');
  }

  delete(id){
    console.log('delete get called');
  }

  update(id, data){
    console.log('update get called');
  }

  create(data){
    console.log('get all get called');
  }
}
