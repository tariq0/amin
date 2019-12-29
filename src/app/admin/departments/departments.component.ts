import { Component, OnInit } from '@angular/core';
import { Pagination } from '../common/pagination';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit , Pagination{
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

  constructor() { }

  ngOnInit() {
    this.data = [
      {nameEn:"culature", _id:"asdfcnmrugj1254fdfdfx150"},
      {nameEn:"culature", _id:"asdfcnmrugj1254fdfdfx150"},
      {nameEn:"culature", _id:"asdfcnmrugj1254fdfdfx150"},
      {nameEn:"culature", _id:"asdfcnmrugj1254fdfdfx150"},
      {nameEn:"culature", _id:"asdfcnmrugj1254fdfdfx150"},
      {nameEn:"culature", _id:"asdfcnmrugj1254fdfdfx150"},
      {nameEn:"culature", _id:"asdfcnmrugj1254fdfdfx150"},
      {nameEn:"culature", _id:"asdfcnmrugj1254fdfdfx150"},
      {nameEn:"culature", _id:"asdfcnmrugj1254fdfdfx150"},
      {nameEn:"culature", _id:"asdfcnmrugj1254fdfdfx150"},

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
