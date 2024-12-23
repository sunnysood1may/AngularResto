import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Users } from '../users';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  users: Users[] = [];
  studentName: any;
  p: number = 1;
  constructor(public rs: RestService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response: any) => {
      this.users = response.data;
    })
  }
  Search(){
    if(this.studentName == ""){
      this.ngOnInit();
    } else {
      this.users = this.users.filter(res =>{
        return res.studentName.toLocaleLowerCase().match(this.studentName.toLocaleLowerCase());
      })
    }
  }

  key: string = 'studentId';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
