import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
//import { emit } from 'process';
//import { EventEmitter } from 'stream';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public message!: string;
  public progress: any;
  public isCreate: boolean = false;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public uploadFile = (files: any) => {
    if(files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);  

    this.http.post('http://localhost:5065/api/upload', formData, { reportProgress: true,observe:'events' })
    .subscribe(event => {
      if(event.type === HttpEventType.UploadProgress){
        //this.progress = Math.round(100 * event.loaded / event.total);
      } else if(event.type === HttpEventType.Response){
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    });
  }


}
