import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean = false;
  editStudent = new FormGroup({
    StudentId: new FormControl(''),
    StudentName: new FormControl(''),
    StudentEmail: new FormControl(''),
    //Password: new FormControl(''),
    //Confirmpwd: new FormControl(''),
    Age: new FormControl(''),
    DepartmentId: new FormControl('')
  })

  constructor(private router:ActivatedRoute, private resto:RestoService) { }

  ngOnInit(): void {
    //console.warn(this.router.snapshot.params['id']);
    this.resto.getCurrentStudent(this.router.snapshot.params['id']).
    subscribe((result: any)=>{   console.warn(result);
      this.editStudent = new FormGroup({
        StudentName: new FormControl(result.data['studentName']),
        StudentEmail: new FormControl(result.data['studentEmail']),
        Age: new FormControl(result.data['age']),
        DepartmentId: new FormControl(result.data['departmentId'])
      })
    })
  }

  collection(){
    console.warn(this.editStudent.value);
    this.resto.updateStudent(this.router.snapshot.params['id'],this.editStudent.value).subscribe((result)=>{
      this.alert = true;
    });
    /*
    this.resto.updateStudent(this.router.snapshot.params['id'],this.editStudent.value).
    subscribe((result: any)=>{
      this.alert = true;
    })*/
  }

  closeAlert(){
    this.alert = false;
  }

}
