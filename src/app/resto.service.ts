import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = "http://localhost:5065/api/user";
  rootUrl = "http://localhost:5065/api/";

  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get(this.url);
  }
  saveStudent(data: any){
    //console.warn("service ",data);
    return this.http.post(this.url,data);
  }
  deleteStudent(id: any){
    return this.http.delete(`${this.url}/${id}`);
  }
  getCurrentStudent(id: any){
    return this.http.get(`${this.url}/${id}`);
  }
  updateStudent(id: any, data: any){
    return this.http.put(`${this.url}/${id}`,data);
  }

}
