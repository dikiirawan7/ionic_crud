import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'aplication/json'}),
  responseType: 'string'
};

const apiUrl = "http://localhost:8000/master_user";

export class Tes{
  username:string;
  phone:string;
  gander:string;
}

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http:HttpClient) { }

  addData(Tes){
    return this.http.post(apiUrl,Tes,httpOptions).pipe(
      map(response=> {
      
      })
    );

  }

}
