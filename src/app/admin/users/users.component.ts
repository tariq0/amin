import { Pagination } from './../common/pagination';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit, Pagination {
  menuText="View";
  data;
  nextState: boolean;
  previousState: boolean;
  page: number;
  perPage: number;
  numberOfPages: number;
  maxHeightCreate:any = 0;
  maxHeightView:any='1000px'; 
  getPage(page, perpage, baseUrl, filter) { }

  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showfailure() {
    this.toastr.error('oh shit ....', 'fucken error');
  }

  ngOnInit() {
    this.data = [
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
      {firstName:"aaaaa", lastName:"aaaaaa", email:"aaaaa@aaaaaa", role:"a"},
    ];
    
    this.nextState = true;
    this.previousState = false;
    this.page = 1;
    this.perPage = 10;
    this.numberOfPages = 10;
    
  }
  onNext(){
    this.page ++;
  }
  onPrevious(){
    if(this.page === 0 || this.page === 1){}
    else this.page --;
  }
  log(message){
    console.log(message);
  }
  toggle(t1,t2){
    if(this.maxHeightCreate === 0){
      this.maxHeightCreate = t1.scrollHeight + 'px';
      this.maxHeightView = 0;
      this.menuText = "Ceate New";
    }else{
      this.maxHeightCreate = 0;
      this.maxHeightView = t2.scrollHeight + 'px';
      this.menuText = "View";
    }
  }
}
