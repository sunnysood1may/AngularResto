import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private http:HttpClient, private resto:RestoService) { }
  collection: any = [];
  p: number = 1;
  itemsPerPage = 5;
  totalItems: any;  

  ngOnInit(): void {
    /*this.resto.getList().subscribe((result: any)=>{
      console.warn(result);
      this.collection = result.data;
      this.page =  0;
    });*/   
    this.getAllData();
  }

  getAllData() {
    const url = `http://localhost:5065/api/user?pageNumber=${0}&pageSize=${this.itemsPerPage}`;
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.collection =  data.data;
      this.totalItems = 50;//data.totalPassengers;
    })
  }

  getPage(page: any) {
    const url = `http://localhost:5065/api/user?pageNumber=${page}&pageSize=${this.itemsPerPage}`;
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.collection =  data.data;
      this.totalItems = 50;//data.totalPassengers;

    })
  }

  deleteStudent(item: any){
    this.collection.splice(item-1,1);
    this.resto.deleteStudent(item).subscribe((result)=>{
      console.warn("result",result);
    })
  }

}