import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor(private http:HttpClient) { }

  server_URL = 'http://localhost:9000'

  authorization(){
  return  this.http.get(`${this.server_URL}/employee/1`)

  }

  addEmployeeApi (employee :employee ){
   return this.http.post(`${this.server_URL}/employee` ,employee)
  }


getAllEmployeeApi(){
  return this.http.get(`${this.server_URL}/employee`)
}

deleteEmployeeApi(id:string) {
  return this.http.delete(`${this.server_URL}/employee/${id}`);
}

viewEmployeeApi(id:string){
  return this.http.get(`${this.server_URL}/employee/${id}`)
}

}
