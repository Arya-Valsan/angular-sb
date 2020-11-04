import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './view-employees/Employee';


const baseUrl: string = 'http://localhost:8000/api/products/'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(public httpClient: HttpClient) { }

  addEmployee(employee: Employee){
    return this.httpClient.post(baseUrl,employee )
  }

  deleteEmployee(index: number){
    return this.httpClient.delete(baseUrl + index)
  }

  fetchAllEmployees(){
    return this.httpClient.get(baseUrl);
  }

  fetchEmployee(id: string){
    return this.httpClient.get(baseUrl + id);
  }

  public employees : Array<Employee> = []

  
}


