import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean = false;
  addStudent = new FormGroup({
    StudentName: new FormControl(''),
    StudentEmail: new FormControl(''),
    Password: new FormControl(''),
    Confirmpwd: new FormControl(''),
    Age: new FormControl(''),
    DepartmentId: new FormControl('')
  })

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }

  collectStudent(){
    //console.warn(this.addStudent.value);
    this.resto.saveStudent(this.addStudent.value).subscribe((result)=>{
      //console.warn("result is here",result);
      this.alert = true;
      //this.addStudent.reset({});
    });
  }

  closeAlert(){
    this.alert = false;
  }

}
