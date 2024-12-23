import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http:HttpClient) { }

  url: string = "http://localhost:5065/api/user";
  /*getUsers(){
    return this.http.get<Users>(this.url);
  }*/
  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }

}
